
//Get the time and display on screen
var util = require('util');
var cp = require("child_process");

document.getElementById('debug').textContent = 'cocks';

var videoAlarm = "test.png";
var wakeUpTime = 2.46 ; 


var wakeHour = Math.floor(wakeUpTime);
wakeHour = (wakeHour < 10 ? "0" : "") + wakeHour;
var wakeMin = (wakeUpTime + "").split(".")[1];
if(wakeMin == null){
	wakeMin = "0";
}
wakeMin = (wakeMin < 10 ? "0" : "") + wakeMin;

var refreshId = setInterval(function() {
	document.getElementById('debug').textContent = getDateTime() + " and " +
													""+wakeHour+wakeMin + " and " +
													getHourMin();
	document.getElementById('time').textContent = getDateTime();
	document.getElementById('monthYear').textContent = getMonthYear();
	if(getHourMin() == ""+wakeHour+wakeMin){
		cp.exec(videoAlarm);
		clearInterval(refreshId);
	}
}, 1000);



function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

    //var year = date.getFullYear();

    //var month = date.getMonth() + 1;
    //month = (month < 10 ? "0" : "") + month;

    //var day  = date.getDate();
    //day = (day < 10 ? "0" : "") + day;
	/*
	var monthNames=['January', 'February',
					'March', 'April',
					'May', 'June',
					'July', 'August',
					'September', 'October',
					'November', 'December'];				
	
    return year + ":" + monthNames[month-1] + ":" + day + "        " + 
			hour + ":" + min + ":" + sec;
	*/
	return hour + ":" + min + ":" + sec;
}

function getMonthYear(){
	var date = new Date();
	
	var year = date.getFullYear();

    var month = date.getMonth() + 1;
    month = (month < 10 ? "0" : "") + month;

    var day  = date.getDate();
    day = (day < 10 ? "0" : "") + day;
	
	var monthNames=['January', 'February',
					'March', 'April',
					'May', 'June',
					'July', 'August',
					'September', 'October',
					'November', 'December'];
	return  monthNames[month-1] + "   " + year;
}

function getHourMin(){
	var date = new Date();
	
	var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
	
	return "" + hour + min;
}