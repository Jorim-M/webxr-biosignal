# webxr-biosignal

# 🔧 Tech Stack Overview

**<ins>1. Hardware: EmotiBit</ins>**

Wearable biosensor capturing real-time EDA, temperature, accelerometer, etc.

Mounted typically on the upper arm, forearm, or hand.

**<ins>2. Data Transmission Layer: OSC (Open Sound Control) or LSL (Lab Streaming Layer)</ins>**

Real-time data protocol for transmitting sensor streams from EmotiBit to applications.

Used for low-latency communication of EDA and other physiological data.

Node.js OSC Server (e.g., using osc-js, node-osc, or osc npm package)

Receives EmotiBit data.

Serves as middleware to forward OSC messages to the frontend (via WebSockets or similar).

**<ins>3. Frontend / XR Environment</ins>**<br>
WebSocket Client

Embedded in the browser to receive OSC data from the Node.js server.

Parses physiological signals and forwards them to rendering logic.

p5.js (Creative coding library in JavaScript)

Handles real-time visual interpretation of biofeedback data.

Used for generative and synesthetic effects (color, form, motion) tied to EDA.

Runs in sync with the A-Frame scene, often layered on a canvas texture or as DOM overlays.

A-Frame (WebXR Framework)

Handles 3D scene construction and immersive rendering.

Integrates with p5.js through either:

a canvas texture mapped onto 3D entities (e.g., a plane or skybox),

or DOM overlays combined with <a-scene embedded> mode.

Supports deployment to VR headsets via WebXR (Meta Quest, etc.).

<ins>**4. Optional Tooling**</ins> <br>
OSC Debugging Tool:

E.g., osc-rx, TouchOSC, or PureData for testing OSC stream.

Glitch / Vite / Parcel / Webpack

For bundling and live-reloading frontend code.

![IMG](https://github.com/user-attachments/assets/0a71468e-64ff-454a-a109-d6f0cc97cfa6)

![snap_img](https://github.com/user-attachments/assets/802329f9-4f73-45a5-aab4-abfbec0ab460)


