const dgram = require('dgram');
const server = dgram.createSocket('udp4');

server.on('listening', () => {
    const addr = server.address();
    console.log(`Server running at ${addr.address}:${addr.port}`);
});

server.on('message', (msg, rinfo) => {
    console.log(`Client says: ${msg.toString()}`);

    // Echo message back
    server.send(msg, rinfo.port, rinfo.address, (err) => {
        if (err) console.log("Error sending reply:", err);
    });
});

server.bind(9876);
