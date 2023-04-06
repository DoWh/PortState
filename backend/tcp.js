const net = require('net');

let poolTCP = new Map();

function toggle(event,port){
    if (poolTCP.has(port)) {
        console.log(`TCP off port:${port}`)
        let server = poolTCP.get(port)
        server.close()
        console.log('TCP Server is turn off on port ' + port +'.');
        poolTCP.delete(port)
        return false;
    } 

    console.log(`TCP on port:${port}`)
    const server = net.createServer();
    server.listen(port, () => {
        console.log('TCP Server is running on port ' + port +'.');
    });
    server.on('connection', (sock) => {
        sock.end("I'm listen on TCP!") 
    })
    poolTCP.set(port, server)
    return true;
}

module.exports = {toggle}