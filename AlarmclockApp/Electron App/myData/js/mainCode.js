
//document.getElementById('debug').textContent = 'cocks';


//Get the time and display on screen
var util = require('util');
var cp = require("child_process");
var fs = require("fs");
var clock = require('./myData/js/time.js');
var color = require('./myData/js/color.js');
var options = require('./myData/js/options.js');
var button = require('./myData/js/button.js');

var content = fs.readFileSync("myData/data/settings.json");
var jsonContent = JSON.parse(content);


//document.getElementById('debug').textContent = jsonContent.test;
///////////////////////////////////
var videoAlarm = "test.png";
var alarmOn = (jsonContent.alarmOn === "true");
var wakeUpTime = 0; 		
var hourTime24	= (jsonContent.hourTime24 === "true"); //changes string to a bool
///////////////////////////////////

var wakeHour;
var wakeMin;

if(hourTime24){
	wakeHour = Math.floor(wakeUpTime);
	wakeHour = (wakeHour < 10 ? "0" : "") + wakeHour;
	wakeMin = (wakeUpTime + "").split(".")[1];
	if(wakeMin == null){
		wakeMin = "0";
	}
	wakeMin = (wakeMin < 10 ? "0" : "") + wakeMin;
}
else{
	
}


var currentTime;
var hourin12;

var refreshId = setInterval(function() {
	/*
	document.getElementById('debug').textContent = getDateTime() + " and " +
													""+wakeHour+wakeMin + " and " +
													getHourMin();
	*/
	
	//Check if time has been changed from 12 to 24 hours or
	//	vice versa.
	var content = fs.readFileSync("myData/data/settings.json");
	var jsonContent = JSON.parse(content);
	hourTime24	= (jsonContent.hourTime24 === "true");
	alarmOn = (jsonContent.alarmOn === "true");
	
	currentTime = clock.getDateTime();
	//using 24 hour clock
	if(hourTime24){
		document.getElementById('hoursMins').textContent = currentTime[0] + ":" + currentTime[1];
		document.getElementById('seconds').textContent = "." + currentTime[2]
		document.getElementById('monthYear').textContent = clock.getMonthYear();
		document.getElementById('ampm').textContent = "";
		if(alarmOn){
			if(clock.getHourMin() == ""+wakeHour+wakeMin){
				cp.exec(videoAlarm);
				clearInterval(refreshId);
			}
		}
			
	}
	//using 12 hour clock
	else{
		hourin12 = clock.changeToAMPM(currentTime[0]);
		document.getElementById('hoursMins').textContent = hourin12[0] + ":" + currentTime[1];
		document.getElementById('seconds').textContent = "." + currentTime[2]
		document.getElementById('monthYear').textContent = clock.getMonthYear();
		document.getElementById('ampm').textContent = hourin12[1];
		if(alarmOn){
			if(clock.getHourMin() == ""+wakeHour+wakeMin){
				cp.exec(videoAlarm);
				clearInterval(refreshId);
			}		
		}		
	}	
	
}, 1000);

/*
	Different colour settings:
	Soft colours:
		saturation = .279;
		lightness = .663;
		
	Speed settings:
		200ms = slow.
		20ms = medium		
*/
var colourCounter = .792;
var saturation = .279;
var lightness = .663;
var colorCombine;

var colourID = setInterval(function() {
	colorCombine = color.hslToRgb(colourCounter, saturation, lightness);
	//document.getElementById('alarmSet').textContent = "Colour: #" + colorCombine;
	$("body").css("background", "#"+colorCombine);
	//colourCounter = colourCounter + .1;
	colourCounter = Math.round((colourCounter + 0.003) * 1e12) / 1e12
	if(colourCounter > 1){
		colourCounter = 0;
	}
	jsonContent.currentColor = colorCombine;
	fs.writeFileSync("myData/data/settings.json", JSON.stringify(jsonContent));
	
}, 200);

//	This loop updates text.
//45 because anything bellow 50 seems instantaneous
var updateButtons = setInterval(function() {
	var content = fs.readFileSync("myData/data/settings.json");
	var jsonContent = JSON.parse(content);
	var isAlarmOn = (jsonContent.alarmOn === "true");
	
	//toggle alarm settings:
	if(isAlarmOn){
		document.getElementById('alarmSetText').textContent = "Alarm: On"
	}
	else{
		document.getElementById('alarmSetText').textContent = "Alarm: Off"
	}
}, 45);

alarmSet.onclick = button.toggleAlarmSetting;














