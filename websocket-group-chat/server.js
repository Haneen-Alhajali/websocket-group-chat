const WebSocket = require('ws');
const server = new WebSocket.Server({ port: 8080 });

const groups = {}; // Object to track groups and their members

server.on('connection', (ws) => {
    ws.on('message', (message) => {
        const data = JSON.parse(message);

        switch (data.type) {
            case 'joinGroup':
                const groupName = data.groupName;

                // Add client to the group
                if (!groups[groupName]) {
                    groups[groupName] = new Set();
                }
                groups[groupName].add(ws);

                ws.groupName = groupName;
                ws.send(JSON.stringify({ type: 'system', message: `Joined group ${groupName}` }));
                break;

            case 'sendMessage':
                const group = groups[ws.groupName];
                if (group) {
                    const broadcastMessage = JSON.stringify({
                        type: 'message',
                        group: ws.groupName,
                        message: data.message,
                    });
                    group.forEach(client => {
                        if (client.readyState === WebSocket.OPEN) {
                            client.send(broadcastMessage);
                        }
                    });
                }
                break;

            default:
                ws.send(JSON.stringify({ type: 'error', message: 'Unknown message type' }));
        }
    });

    ws.on('close', () => {
        // Remove client from the group
        if (ws.groupName) {
            const group = groups[ws.groupName];
            if (group) {
                group.delete(ws);
                if (group.size === 0) {
                    delete groups[ws.groupName];
                }
            }
        }
    });
});

console.log('WebSocket server is running on ws://localhost:8080');
