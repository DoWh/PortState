const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
    'electron',
    {
        startTCP: (port) => ipcRenderer.send('start-tcp', port),
        startUDP: (port) => ipcRenderer.send('start-udp', port),

        stopTCP: (port) => ipcRenderer.send('stop-tcp', port),        
        stopUDP: (port) => ipcRenderer.send('stop-udp', port),

        checkTCP: (port) => ipcRenderer.invoke('check-tcp', port),
        checkUDP: (port) => ipcRenderer.invoke('check-udp', port),
    }
)