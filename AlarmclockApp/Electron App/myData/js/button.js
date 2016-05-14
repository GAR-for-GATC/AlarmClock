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
	
	if(alarmOn){
		//alarmOn = false;
		togAlarmJson.alarmOn = "false";
		fs.writeFileSync("myData/data/settings.json", JSON.stringify(togAlarmJson));
	}
	else{
		//alarmOn = true;
		togAlarmJson.alarmOn = "true";
		fs.writeFileSync("myData/data/settings.json", JSON.stringify(togAlarmJson));
	}
	return;	
}

//opens the "Set Alarm" window.
exports.openSetAlarm = function(){
	var myWindow = window.open('./Popups/setAlarm/setAlarm.html', 'Set Alarm', 'height=280, width=400, menubar=0'); 
	//myWindow.resizeTo(600, 250); 
	//myWindow.focus();
	return;
}








