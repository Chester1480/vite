
function connet(url) {
    const socket = new WebSocket(url);
    return socket;
}

// // Connection opened
// socket.addEventListener('open', function (event) {
//     socket.send('Hello Server!');
// });

// // Listen for messages
// socket.addEventListener('message', function (event) {
//     console.log('Message from server ', event.data);
// });