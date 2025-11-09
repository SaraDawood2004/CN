const net = require('net');

const client = new net.Socket();

client.connect(5000, '127.0.0.1', () => {
    console.log("Connected to server");
    client.write("Hello Server");
});

client.on('data', (data) => {
    console.log("FROM SERVER:", data.toString());
    client.end();   
});

client.on('close', () => {
    console.log("Connection closed");
});
