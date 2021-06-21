// The Munich Proyect
// This code is based in ElectronJS.org
const { app, BrowserWindow } = require('electron')
const path = require('path')
// Configuration Adblocker
let { fetch } = require('cross-fetch');
const { ElectronBlocker, fullLists, Request } = require('@cliqz/adblocker-electron');
ElectronBlocker.fromPrebuiltAdsAndTracking(fetch).then((blocker) => {
  blocker.enableBlockingInSession(session.defaultSession);
});

function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 720,
    webPreferences: {
      preload: path.join(__dirname, 'confinit.js')
    }
  })

  mainWindow.loadFile('../../../munich-interface/init/init.html')
}


app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
  
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})


app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})


