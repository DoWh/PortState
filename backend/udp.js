const dgram = require('dgram')

let poolUDP = new Map();

function toggle(event,port){
    if (poolUDP.has(port)){
        let server = poolUDP.get(port)
        server.close()
        console.log('UDP Server is turn off on port ' + port +'.');
        poolUDP.delete(port)
        return false;
    }

    const server = dgram.createSocket('udp4')
    server.bind(port)
    server.on('listening', () => {
        console.log('UDP Server is running on port ' + port +'.');
    })
    poolUDP.set(port, server)
    return true;
}

module.exports = {toggle}