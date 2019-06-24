'use strict';
const path = require('path');
const {app, BrowserWindow} = require('electron');
require('./main/main.js')

let mainWindow;

(async () => {
	await app.whenReady();

	mainWindow = new BrowserWindow();
	await mainWindow.loadFile(path.join(__dirname, 'index.html'));
})();
