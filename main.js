// Electron modules to import
const { app, BrowserWindow } = require("electron");
const path = require("path");

// Create the application window
const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 920,
    webPreferences: {
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

console.log(`Chrome v${process.versions.chrome}`);
console.log(`Node v${process.versions.node}`);
console.log(`Electron v${process.versions.electron}`);

// const information = document.getElementById("info");
// information.innerText = `Versions ${depend[0]}}`;
