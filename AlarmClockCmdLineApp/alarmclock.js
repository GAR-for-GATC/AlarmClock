
///////////////////////////////////
//How to use:
// 1) put the file name, and then time into the variables.
// 		ex: 6.00 for 6AM, decimals represent minutes,
//		so 6.30 stands for 6:30AM.  Time is in 24 hours.
//		Be sure that the video/music file is in the same
//		directory ashis file.
//		If 24 hour time is changed to false, use 12 hour time.
// 2) Run using Node.js
///////////////////////////////////
var videoAlarm 	= "test.mp4";
var wakeUpTime 	= '7.50'; 
var isAmPm		= "am";			//Ignored if hourTime24 is true.
var hourTime24	= false;
//////////////////////////////////

var util = require('util');
var cp = require("child_process");

if(!hourTime24){
	if(isAmPm.toLowerCase() == "pm"){
		wakeUpTime = wakeUpTime + 12; //changes back to 24 hours for calculations
	}
}

//parsing alarm hours
var wakeHour = Math.floor(wakeUpTime);
wakeHour = (wakeHour < 10 ? "0" : "") + wakeHour;

//parsing the alarm minutes
var wakeMin = (wakeUpTime + "").split(".")[1];
if(wakeMin == null){
	wakeMin = "0";
}
if(wakeMin > 60 ||  wakeMin.length > 2 ){	
	console.log(wakeMin + ' is not a valid input for minutes ' +
				'or the maximum number\nof characters have been exceeded');
	return(0);
}
else if(wakeMin < 10 && !(wakeMin.startsWith("0")) ){
	wakeMin =  wakeMin + "0";
}



var refreshId = setInterval(function() {
	util.print("\u001b[2J\u001b[0;0H"); //clears screen
	if(hourTime24){
		console.log("\t=================================\n\t=\t\t\t\t=");
		console.log("\t= " + getDateTime()+"\t=");	
		console.log("\t= Alarm at: " + wakeHour + ":" + wakeMin + "\t\t=\n\t=\t\t\t\t=");
		console.log("\t=================================\n");
		
		if(getHourMin() == ""+wakeHour+wakeMin){
			cp.exec(videoAlarm);
			clearInterval(refreshId);
		}	
	}
	else{
		console.log("\t=================================\n\t=\t\t\t\t=");
		console.log("\t= " + getDateTime12()+"\t=");
		var hourTime12 = changeToAMPM(wakeHour);
		console.log("\t= Alarm at: " + hourTime12[0] + ":" + wakeMin + hourTime12[1] +  "\t\t=\n\t=\t\t\t\t=");
		console.log("\t=================================\n");

		if(getHourMin() == ""+wakeHour+wakeMin){
			cp.exec(videoAlarm);
			clearInterval(refreshId);
		}	
	}
		
}, 1000);

function changeToAMPM(hour24){
	var hour12;
	var amPm = "AM";
	if(hour24 > 12){
		hour12 = hour24 - 12;
		amPm = "PM";
	}
	else{
		hour12 = hour24;
	}
	return [hour12, amPm];	
}

function getDateTime12() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

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

	var hour12 = changeToAMPM(hour);
	
    return year + ":" + monthNames[month-1] + ":" + day + "        " + 
			hour12[0] + ":" + min + ":" + sec + hour12[1];
}

function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

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
	
    return year + ":" + monthNames[month-1] + ":" + day + "        " + 
			hour + ":" + min + ":" + sec;
}

function getHourMin(){
	var date = new Date();
	
	var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
	
	return "" + hour + min;
}