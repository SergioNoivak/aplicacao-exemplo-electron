const electron =  require('electron')
//processo principal do app electron e gerencia ciclo de vida
const {app,BrowserWindow,ipcMain} = electron
const sizeOf = require('image-size')
let mainWindow 
app.on('ready',()=>{

    mainWindow = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true
        }
    })
    mainWindow.loadURL(`file://${__dirname}/index.html`)
})

ipcMain.on('obterDimensoesDaImagem',(event,path)=>{

    sizeOf(path,(err,dimensions)=>{

            mainWindow.webContents.send('dimensoesDaImagem',dimensions);


    })

})