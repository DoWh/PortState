const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')
const tcp = require('./tcp.js')
const udp = require('./udp.js')

const isMac = process.platform === 'darwin';
const isDev = process.argv[2] === 'dev'
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const createMainWindow = () => {
    const win = new BrowserWindow({
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        },
        width: (isDev) ? 1000 : 450,
        height: 700,
    })

    win.setMinimumSize((isDev) ? 1000 : 450, 700)

    win.loadURL(
        isDev
          ? 'http://localhost:3000'
          : `file://${path.join(__dirname, '../build/index.html')}`
    );

    if (isDev) win.webContents.openDevTools()
    else win.setMenu(null);

    ipcMain.on('start-tcp', tcp.start)
    ipcMain.on('start-udp', udp.start)

    ipcMain.on('stop-tcp', tcp.stop)
    ipcMain.on('stop-udp', udp.stop)

    ipcMain.handle('check-tcp', tcp.check);
    ipcMain.handle('check-udp', udp.check);

} 

app.whenReady().then(createMainWindow)

app.on('window-all-closed', () => {
    if (!isMac) app.quit()
})