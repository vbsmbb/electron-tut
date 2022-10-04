// Electron modules to import
const { app, BrowserWindow } = require("electron");
const path = require("path");

// Create the application window
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webpreferences: {
      preload: path.join(__dirname, "preload.js"),
    },
  });

  win.loadFile("index.html");
};

// Display the application window
app.whenReady().then(() => {
  createWindow();

  // For MacOS
  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

// Stop application when all windows are closed
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});
