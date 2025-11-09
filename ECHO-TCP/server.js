const net = require('net');

const server = net.createServer((socket) => {
    console.log("Client connected");

    socket.on('data', (data) => {
        console.log("Client says:", data.toString());

        // Echo the same data back
        socket.write(data);
    });

    socket.on('end', () => {
        console.log("Client disconnected");
    });
});

server.listen(5000, () => {
    console.log("Server running on port 5000");
});
