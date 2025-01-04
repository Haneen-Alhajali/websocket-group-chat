# 🌐 WebSocket Group Chat Application

A real-time group chat application using WebSockets that allows multiple clients to join specific groups and exchange messages exclusively with other members of the same group.

---

## ✨ Features

- ⚡ **Real-Time Messaging:** Enables real-time communication between clients.
- 👥 **Group Chat Functionality:** Users can join specific groups, and messages are only broadcast to members of that group.
- 📈 **Scalable Architecture:** The WebSocket server can handle multiple clients and groups simultaneously.

---
## 📁 Project Structure
```
websocket-group-chat/
├── server.js       # WebSocket server to handle connections and messages.
├── client.js       # Client-side script for communication and UI interactions. 
└── index.html      # Frontend for the chat application.
README.md           # Project documentation
Activity 4.pdf      # the activity description file from the instructor.

```

---
## 🛠️ Prerequisites

- **Node.js** must be installed on your machine.  
  You can download it from [Node.js Official Website](https://nodejs.org).

---
## 🚀 Installation

1. Clone this repository:
   ```bash
   https://github.com/Haneen-Alhajali/websocket-group-chat
   ```
2. Navigate to the project directory:
   ```bash
   cd websocket-group-chat
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Install the ws WebSocket library:
   ```bash
   npm install ws --force
   ```
---
## ▶️ Usage
#### Running the WebSocket Server
1. Start the server:
    ```bash   
    node server.js
   ```
2. The WebSocket server will run at ws://localhost:8080.

#### Running the Client Application
1. Open `index.html` in a web browser.
2. Use the interface to:
    - 🏷️ **Join a Group**: Enter a group name and click the "Join Group" button.
    - 💬 **Send a Message**: Type a message and click the "Send Message" button.
3. Open the `index.html` file in multiple browser tabs to simulate multiple clients and test the group chat functionality.

---
## 🎯 Example Workflow
1. Client 1 joins Group 1 and sends a message:
    ```
    [Group 1] Hello, Group 1!
    ```
2. Client 2 joins Group 2 and sends a message:
    ```   
    [Group 2] Hi, Group 2!
   ```
3. Messages are broadcast only to members of the respective group.
---
## 🙌 Acknowledgments
- 🌐 **WebSocket API**: For enabling real-time communication.
- 🟢 **Node.js**: For the server implementation.
- 🖥️ **HTML/JavaScript**: For the client-side interface.
---
## 📧 Contact
- **Project Author**: Haneen Alhajali
- **Email**: haneenalhajali2003@gmail.com

**Happy Coding!**
