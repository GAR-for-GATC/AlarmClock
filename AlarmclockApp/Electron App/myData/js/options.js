
var exports = module.exports = {};

//Exit Function///////////////////////////////
//exits the program
exports.exitProgram = function(){
	//document.getElementById('debug').textContent = 'cocks';
	window.open('','_parent',''); 
	window.close();
	return;	
}

//Runs when a key is pressed.///////////////////////////////
exports.keypressCheck = function (){
	$(document).keypress("w",function(e) {
		if(e.ctrlKey){	
			window.open('','_parent',''); 
			window.close();
			return;	
		} 
	});
	
}

//Toggles the 12/14 hour value in the json file/////////////
exports.toggleTime = function (){
	var togTimeContent = fs.readFileSync("myData/data/settings.json");
	var togTimeJson = JSON.parse(togTimeContent);
	var currentSetting	= (togTimeJson.hourTime24 === "true");
	//if 24hourtime is true, change to false
	if(currentSetting){
		
		togTimeJson.hourTime24 = "false";
		fs.writeFileSync("myData/data/settings.json", JSON.stringify(togTimeJson));
	}
	else{
		
		togTimeJson.hourTime24 = "true";
		fs.writeFileSync("myData/data/settings.json", JSON.stringify(togTimeJson));
	}
	//window.location.reload();
	return;
}

//Opens the Set Time window
exports.openSetTime = function(){
	var myWindow = window.open('./Popups/setTime/setTime.html', 'Set Time', 'height=250, width=350'); 
	return;
}
//Opens the Font Options Window
exports.openFontOptions = function(){
	var myWindow = window.open('./Popups/fontOptions/fontOptions.html', 'Font Options', 'height=330, width=460'); 
	return;
}
//Opens the set colour options window
exports.openColorOptions = function(){
	var myWindow = window.open('./Popups/colorOptions/colorOptions.html', 'Set Colours', 'height=370, width=460'); 
	return;
}

//Opens the set colour options window
exports.openColorTransitions = function(){
	var myWindow = window.open('./Popups/colorTransitions/colorTransitions.html', 'Set Colours', 'height=360, width=480'); 
	return;
}








