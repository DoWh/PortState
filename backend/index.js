// const path = require('path')
const { app, BrowserWindow, ipcMain } = require('electron')

const isMac = process.platform === 'darwin';
const isDev = process.argv[2] === 'dev'
process.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = 'true';

const createMainWindow = () => {
    const win = new BrowserWindow({
        // webPreferences: {
        //     preload: path.join(__dirname, 'preload.js')
        // },
        width: (isDev) ? 1000 : 400,
        height: 800,
        webPreferences: {
            nodeIntegration: true
        }
    })

    win.loadURL('http://localhost:3000');

    if (isDev) win.webContents.openDevTools()
    
} 

app.whenReady().then(createMainWindow)

app.on('window-all-closed', () => {
    if (!isMac) app.quit()
})
