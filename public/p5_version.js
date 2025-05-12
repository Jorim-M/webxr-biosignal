// let oscPort;
// let oscAddress = "/EmotiBit/0/PPG:IR";
// let dataList = [];

// // Filter variables
// let samplingFreq = 25;
// let lowPass = true;
// let lpCut = 3;
// let highPass = true;
// let hpCut = 1;
// let lpFiltVal;
// let hpFiltVal;
// let firstFilt = true;

let socket;
let xPos = 50;  // Initial X position for the circle
let circleSize = 50;  // Default size
let circleColor;  // Declare color variable

function setup() {
    createCanvas(windowWidth, windowHeight);
    circleColor = color(0);  // Initialize with black

    // Connect to WebSocket server
    socket = new WebSocket("ws://localhost:3000");

    // When receiving data from WebSocket
    socket.onmessage = function (event) {
        let oscData = JSON.parse(event.data);
        console.log("Received OSC:", oscData);

        if (oscData.address === "/EmotiBit/0/ACC:X") {
            let accX = oscData.args[0];
            xPos = map(accX, -2, 2, 0, width);  // Adjust range if needed
        }

        if (oscData.address === "/EmotiBit/0/EDA") {
            edaValue = oscData.args[0];  // EDA signal
            circleSize = map(edaValue, 0, 50, 100, 1000);  // Adjust range if needed
        }

        if (oscData.address === "/EmotiBit/0/PPG:RED") {
            let ppgValue = oscData.args[0];  // PPG signal (Heart Rate proxy)
            circleColor = color(map(ppgValue, 0, 1000, 0, 255), 0, 0);  // Red intensity
        }
    };
}

function draw() {
    background(255);
    fill(circleColor);  // Use global `circleColor`
    ellipse(xPos, height / 2, circleSize, circleSize);
}


// function draw() {
//   background(0);
//   if (dataList.length > 0) {
//     let data = dataList[dataList.length - 1];
//     let alpha = int(255 * autoscale(data));
//     background(alpha, 0, 0);
//     drawData();
//   }
// }

// function drawData() {
//   stroke(255);
//   while (dataList.length > width) {
//     dataList.shift(); // Remove oldest entry if list exceeds width
//   }
//   for (let n = 0; n < dataList.length - 1; n++) {
//     let y1 = height * autoscale(dataList[n]);
//     let y2 = height * autoscale(dataList[n + 1]);
//     line(n, height - y1, n + 1, height - y2);
//   }
// }

// function autoscale(data) {
//   if (dataList.length > 0) {
//     let minData = min(dataList);
//     let maxData = max(dataList);
//     return (data - minData) / (maxData - minData);
//   }
//   return 0;
// }

// function oscEvent(data) {
//   let filteredData = filter(data[0]);
//   dataList.push(filteredData);
// }

// function myfilter(data) {
//   let DIGITAL_FILTER_PI = Math.PI;
//   let DIGITAL_FILTER_E = Math.E;
//   let lpAlpha = Math.pow(DIGITAL_FILTER_E, -2 * DIGITAL_FILTER_PI * lpCut / samplingFreq);
//   let hpAlpha = Math.pow(DIGITAL_FILTER_E, -2 * DIGITAL_FILTER_PI * hpCut / samplingFreq);
//   if (lowPass) {
//     lpFiltVal = firstFilt ? data : data * (1 - lpAlpha) + lpFiltVal * lpAlpha;
//     data = lpFiltVal;
//   }
//   if (highPass) {
//     hpFiltVal = firstFilt ? data : data * (1 - hpAlpha) + hpFiltVal * hpAlpha;
//     data -= hpFiltVal;
//   }
//   firstFilt = false;
//   return data;
// }
