const ws = new WebSocket('ws://localhost:8080');

ws.onmessage = (event) => {
    const data = JSON.parse(event.data);

    if (data.type === 'message') {
        const messageList = document.getElementById('messages');
        const listItem = document.createElement('li');
        listItem.textContent = `[${data.group}] ${data.message}`;
        messageList.appendChild(listItem);
    } else if (data.type === 'system') {
        alert(data.message);
    } else if (data.type === 'error') {
        console.error(data.message);
    }
};

function joinGroup() {
    const groupInput = document.getElementById('groupInput').value.trim();
    if (groupInput) {
        ws.send(JSON.stringify({ type: 'joinGroup', groupName: groupInput }));
    } else {
        alert('Please enter a group name.');
    }
}

function sendMessage() {
    const messageInput = document.getElementById('messageInput').value.trim();
    if (messageInput) {
        ws.send(JSON.stringify({ type: 'sendMessage', message: messageInput }));
        document.getElementById('messageInput').value = ''; // Clear input after sending
    } else {
        alert('Please enter a message.');
    }
}
