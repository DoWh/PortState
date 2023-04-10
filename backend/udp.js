const dgram = require('dgram')

module.exports = new class UDP {

    static pool = new Map();

    start( _ ,port){
        const server = dgram.createSocket('udp4')
        server.bind(port)
        server.on('listening', () => {
            console.log('UDP Server is running on port ' + port +'.');
        })
        UDP.pool.set(port, server)
    }
    stop( _ ,port){
        let server = UDP.pool.get(port)
        server.close()
        console.log('UDP Server is turn off on port ' + port +'.');
        UDP.pool.delete(port)
    }
    check( _ ,port){
        return UDP.pool.has(port);
    }
}