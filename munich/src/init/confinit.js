// The Munich Proyect
// confinit use for load include modules this proyect and initial configuration



// ./main.js

//Configuration electron-context-menu

const { app, BrowserWindow, Menu , session,  } = require('electron')
const contextMenu = require('electron-context-menu');
("web-contents-created", (e, contents) => {
  contextMenu({
     window: contents,
     showSaveImageAs: true,
     showInspectElement: false
  });
})




contextMenu({
  prepend: (params, WebViewTag) => [
      {
          role: "zoomIn"
      },
      {
          role: "zoomOut"
      },
  ],
});


// Configuration Menu
const isMac = process.platform === 'darwin'
  const template = [
   
  
    {
      label: 'Editar',
    submenu: [
      { role: 'undo' },
      { role: 'redo' },
      { type: 'separator' },
      { role: 'cut' },
      { role: 'copy' },
      { role: 'paste' },
     ]
    },
     
  // { role: 'viewMenu' }
  {
    label: 'View',
    submenu: [
 { role: 'reload'},      
     { role: 'forcereload' },
    { role: 'toggledevtools' },
      { type: 'separator' },
      { role: 'resetzoom' },
      { role: 'zoomin' },
      { role: 'zoomout' },
      { type: 'separator' },
      { role: 'togglefullscreen' }
    ]

    
    },
 
      
    
  ]
  
  const menu = Menu.buildFromTemplate(template)
  Menu.setApplicationMenu(menu)

  // Configuration App
  app.disableHardwareAcceleration ();

