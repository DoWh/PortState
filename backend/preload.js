const { contextBridge, ipcRenderer } = require('electron')

contextBridge.exposeInMainWorld(
    'electron',
    {
        toggleTCP: (port) => ipcRenderer.invoke('tg-tcp', port),
        toggleUDP: (port) => ipcRenderer.invoke('tg-udp', port),
    }
)