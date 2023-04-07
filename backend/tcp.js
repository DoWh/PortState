const net = require('net');

module.exports = new class TCP {

    static pool = new Map();

    start( _ ,port){
        console.log(`TCP on port:${port}`)
        const server = net.createServer();
        server.listen(port, () => {
            console.log('TCP Server is running on port ' + port +'.');
        });
        server.on('connection', (sock) => {
            sock.end("I'm listen on TCP!") 
        })
        TCP.pool.set(port, server)
    }
    stop( _ ,port){
        let server = TCP.pool.get(port)
        server.close()
        console.log('TCP Server is turn off on port ' + port +'.');
        TCP.pool.delete(port)
    }
}