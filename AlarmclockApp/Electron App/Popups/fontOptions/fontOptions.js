 
 var fs = require("fs");
 
//populate boxes with info.
window.onload = function() {
	
	var dateSize = document.getElementsByName('entry0')[0];
	var hrminSize = document.getElementsByName('entry1')[0];
	var secondSize = document.getElementsByName('entry2')[0];
	var ampmSize = document.getElementsByName('entry3')[0];
	
	var content = fs.readFileSync("./resources/app/myData/data/settings.json");
	var jsonContent = JSON.parse(content);
	
	dateSize.value = jsonContent.FS0 + "px";
	hrminSize.value = jsonContent.FS1 + "px";
	secondSize.value = jsonContent.FS2 + "px";
	ampmSize.value = jsonContent.FS3 + "px";
}


