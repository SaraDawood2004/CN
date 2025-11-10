const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question("Enter message: ", (msg) => {
    client.send(msg, 9876, 'localhost', (err) => {
        if (err) console.log("Error:", err);
    });
});

client.on('message', (data) => {
    console.log("FROM SERVER:", data.toString());
    client.close();
    rl.close();
});
