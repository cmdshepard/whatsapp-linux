const { app, BrowserWindow } = require('electron');

let mainWindow;

const createWindow = () => {
  mainWindow = new BrowserWindow({ width: 1400, height: 900 });
  mainWindow.setMenuBarVisibility(false);
  mainWindow.loadURL('https://web.whatsapp.com');
  mainWindow.on('closed', () => mainWindow.close());
};

app.on('ready', createWindow);
app.on('window-all-closed', () => app.quit());
