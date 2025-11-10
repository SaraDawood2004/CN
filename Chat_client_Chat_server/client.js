const net = require('net');
const readline = require('readline');

const client = new net.Socket();

client.connect(3128, 'localhost', () => {
    console.log("Connected to Server");
});

// Read line from user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// When client receives message from server
client.on('data', (data) => {
    const msg = data.toString();
    console.log("Server:", msg);

    if (msg.trim() === "end") {
        console.log("Server ended chat");
        client.end();
        rl.close();
    }
});

// When user types a message
rl.on('line', (input) => {
    client.write(input);
    if (input.trim() === "end") {
        client.end();
        rl.close();
    }
});

client.on('close', () => {
    console.log("Connection Closed");
});
