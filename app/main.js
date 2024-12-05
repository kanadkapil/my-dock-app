const { app, BrowserWindow, screen } = require('electron');
const path = require('path');

let mainWindow;

app.on('ready', () => {
    const { width, height } = screen.getPrimaryDisplay().workAreaSize;

    mainWindow = new BrowserWindow({
        width: 800,
        height: 100,
        x: 0,
        y: height - 100, // Position at the bottom of the screen
        transparent: true,
        frame: false,
        skipTaskbar: true,
        alwaysOnTop: false, // Ensure it's not above all windows
        resizable: false,
        focusable: false, // Prevent focus shifts
        webPreferences: {
            preload: path.join(__dirname, 'renderer.js'),
            nodeIntegration: true,
        },
    });

    mainWindow.loadFile(path.join(__dirname, 'index.html'));

    // Makes the dock draggable
    mainWindow.setBounds({
        x: 100,
        y: height - 150, // Adjust based on initial position
        width: 800,
        height: 100,
    });

    // Minimize interaction conflicts when dock is inactive
    mainWindow.setIgnoreMouseEvents(true, { forward: true });
    mainWindow.showInactive(); // Keeps the dock in the background
});

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});
