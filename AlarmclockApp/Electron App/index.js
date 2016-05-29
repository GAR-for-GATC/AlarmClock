
const electron = require('electron');
const {app} = electron;

//var BrowserWindow = require('browser-window');
const {BrowserWindow} = require('electron');

app.on('window-all-closed', function() {
  app.quit();
});

app.on('ready', function(){
	var mainWindow = new BrowserWindow({
		width:900,
		height: 600	
	});
	//mainWindow.openDevTools();
	
	//"file://" means local file, '__dirname' means directory name
	mainWindow.loadURL('file://' + __dirname + '/index.html');	
});