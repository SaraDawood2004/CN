const net = require('net');
const readline = require('readline');

const server = net.createServer((socket) => {
    console.log('Client Connected');

    // Read line from server user
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    // When server receives message from client
    socket.on('data', (data) => {
        const msg = data.toString();
        console.log("Client:", msg);

        if (msg.trim() === "end") {
            console.log("Client ended chat");
            socket.end();
            rl.close();
        }
    });

    // When server user types a message
    rl.on('line', (input) => {
        socket.write(input);
        if (input.trim() === "end") {
            socket.end();
            rl.close();
        }
    });

    socket.on('close', () => {
        console.log("Client Disconnected");
    });
});

server.listen(3128, () => {
    console.log("Server running on port 3128");
});
