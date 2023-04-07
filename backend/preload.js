const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
    'electron',
    {
        startTCP: (port) => ipcRenderer.send('start-tcp', port),
        stopTCP: (port) => ipcRenderer.send('stop-tcp', port),
        startUDP: (port) => ipcRenderer.send('start-udp', port),
        stopUDP: (port) => ipcRenderer.send('stop-udp', port),
    }
)