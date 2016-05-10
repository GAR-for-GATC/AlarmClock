
//document.getElementById('debug').textContent = 'cocks';


//Get the time and display on screen
var util = require('util');
var cp = require("child_process");

///////////////////////////////////
var videoAlarm = "test.png";
var wakeUpTime = 2.46 ; 
var isAmPm		= "pm";			//Ignored if hourTime24 is true.
var hourTime24	= false;
///////////////////////////////////

var wakeHour = Math.floor(wakeUpTime);
wakeHour = (wakeHour < 10 ? "0" : "") + wakeHour;
var wakeMin = (wakeUpTime + "").split(".")[1];
if(wakeMin == null){
	wakeMin = "0";
}
wakeMin = (wakeMin < 10 ? "0" : "") + wakeMin;

var currentTime;

var refreshId = setInterval(function() {
	/*
	document.getElementById('debug').textContent = getDateTime() + " and " +
													""+wakeHour+wakeMin + " and " +
													getHourMin();
	*/
	currentTime = getDateTime();
	
	document.getElementById('hoursMins').textContent = currentTime[0] 
													+ ":" + currentTime[1];
	document.getElementById('seconds').textContent = "." + currentTime[2]
	document.getElementById('monthYear').textContent = getMonthYear();
	if(getHourMin() == ""+wakeHour+wakeMin){
		cp.exec(videoAlarm);
		clearInterval(refreshId);
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
	colorCombine = hslToRgb(colourCounter, saturation, lightness);
	//document.getElementById('alarmSet').textContent = "Colour: #" + colorCombine;
	$("body").css("background", "#"+colorCombine);
	//colourCounter = colourCounter + .1;
	colourCounter = Math.round((colourCounter + 0.003) * 1e12) / 1e12
	if(colourCounter > 1){
		colourCounter = 0;
	}
	
}, 200);


//Clock Functions//////////////////
function getDateTime() {

    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

	return [hour, min, sec];
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
	var daySuffixes = 	["1st", "2nd", "3rd", "4th",
						 "5th", "6th", "7th", "8th",
						 "9th", "10th", "11th", "12th",
						 "13th", "14th", "15th", "16th",
						 "17th", "18th", "19th", "20th",
						 "21st", "22nd", "23rd", "24th",
						 "25th", "26th", "27th", "28th",
						 "29th", "30th", "31st", "32nd"];
	return  monthNames[month-1] + " " + daySuffixes[day-1] + ",   " + year;
}

function getHourMin(){
	var date = new Date();
	
	var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
	
	return "" + hour + min;
}



//Hue functions///////////////////////////////

function hslToRgb(h, s, l){
    var r, g, b;

    if(s == 0){
        r = g = b = l; // achromatic
    }else{
        var hue2rgb = function hue2rgb(p, q, t){
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1/3);
    }
	//return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
    //return [parseInt( (Math.round(r * 255)).toString() + (Math.round(g * 255)).toString()  + (Math.round(b * 255)).toString() ) ];
	return toHex(Math.round(r * 255)) +  toHex(Math.round(g * 255)) +  toHex(Math.round(b * 255));
}

function toHex(decimal){
	var hex;
	hex = decimal.toString(16);
	return hex;
}
















