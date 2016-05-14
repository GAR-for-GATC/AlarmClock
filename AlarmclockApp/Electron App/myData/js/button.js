var exports = module.exports = {};

//functions that run on button clicks//////////////////
var alarmSet = document.getElementById('alarmSet');
    //alarmTime = document.getElementById('alarmTime'),
	//alarmFile = document.getElementById('alarmFile');

exports.toggleAlarmSetting = function() {
    //alert('Yay!');
	var togAlarmContent = fs.readFileSync("myData/data/settings.json");
	var togAlarmJson = JSON.parse(togAlarmContent);
	var currentAlarmSetting	= (togAlarmJson.alarmOn === "true");
	
	if(currentAlarmSetting){
		console.log("purple");
		//alarmOn = false;
		togAlarmJson.alarmOn = "false";
		fs.writeFileSync("myData/data/settings.json", JSON.stringify(togAlarmJson));
		document.getElementById('alarmSetText').textContent = "Alarm: Off"
	}
	else{
		//alarmOn = true;
		console.log("cocks");
		togAlarmJson.alarmOn = "true";
		fs.writeFileSync("myData/data/settings.json", JSON.stringify(togAlarmJson));
		document.getElementById('alarmSetText').textContent = "Alarm: On"
	}
	return;	
}

//opens the "Set Alarm" window.
exports.openSetAlarm = function(){
	var myWindow = window.open('./Popups/setAlarm/setAlarm.html', 'Set Alarm', 'height=310, width=400, menubar=0'); 
	//myWindow.resizeTo(600, 250); 
	//myWindow.focus();
	return;
}








