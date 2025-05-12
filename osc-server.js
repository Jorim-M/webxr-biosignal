const WebSocket = require("ws");
const osc = require("osc");
const express = require("express");

const app = express();
const server = require("http").createServer(app);
const wss = new WebSocket.Server({ server });

// Serve static files (for p5.js)
app.use(express.static("public"));

// OSC Receiver
const udpPort = new osc.UDPPort({
    localAddress: "127.0.0.1",
    localPort: 12345 // Ensure this matches EmotiBit's OSC output port
});

udpPort.on("message", (oscMsg) => {
    console.log("Received OSC:", oscMsg);

    // Forward OSC data to WebSocket clients
    wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
            client.send(JSON.stringify(oscMsg));
        }
    });
});

udpPort.open();

// Start WebSocket server
server.listen(3000, () => console.log("Server running at http://localhost:3000"));
