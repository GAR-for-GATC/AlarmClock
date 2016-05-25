window.onload = function() {
	var video = document.getElementById("video");
	var playButton = document.getElementById("play-pause");
	var muteButton = document.getElementById("mute");
	var seekBar = document.getElementById("seek-bar");
	var volumeBar = document.getElementById("volume-bar");
	var volumenumber = document.getElementById('volume-number');
	var repeatButton = document.getElementById('repeat');
	
	//var videoCurrentTime = document.getElementById("video").currentTime;
	var showTime = document.getElementById("currentTime");
	
	
	playButton.addEventListener("click", function() {
		if (video.paused == true) {
			// Play the video
			video.play();

			// Update the button text to 'Pause'
			playButton.innerHTML = "Pause";
		} else {
			// Pause the video
			video.pause();

			// Update the button text to 'Play'
			playButton.innerHTML = "Play";
		}
	});
	
	muteButton.addEventListener("click", function() {
		if (video.muted == false) {
			// Mute the video
			video.muted = true;

			// Update the button text
			muteButton.innerHTML = "Unmute";
		} else {
			// Unmute the video
			video.muted = false;

			// Update the button text
			muteButton.innerHTML = "Mute";
		}
	});
	
	repeatButton.addEventListener("click", function() {
		if (video.loop == false) {
			// Mute the video
			video.loop = true;

			// Update the button text
			repeatButton.innerHTML = "Repeat";
		} else {
			// Unmute the video
			video.loop = false;

			// Update the button text
			repeatButton.innerHTML = "NoRepeat";
		}
	});
	// Event listener for the seek bar
	seekBar.addEventListener("change", function() {
		// Calculate the new time
		var time = video.duration * (seekBar.value / 100);

		// Update the video time
		video.currentTime = time;
		
	});
	
	
	
	// Update the seek bar as the video plays
	video.addEventListener("timeupdate", function() {
		// Calculate the slider value
		//var value = (100 / video.duration) * video.currentTime;
		var value = (100 / Math.ceil(video.duration)) * Math.ceil(video.currentTime);
		// Update the slider value
		seekBar.value = value;
		//update shown time
		showTime.innerHTML = Math.ceil(video.currentTime);
		//console.log(value);
		totalTime.innerHTML = Math.ceil(video.duration);
	});
	
	// Pause the video when the seek handle is being dragged
	seekBar.addEventListener("mousedown", function() {
		video.pause();
	});
	// Play the video when the seek handle is dropped
	seekBar.addEventListener("mouseup", function() {
		video.play();
	});
	// Event listener for the volume bar
	volumeBar.addEventListener("change", function() {
		// Update the video volume
		video.volume = volumeBar.value;
		volumenumber.innerHTML = (volumeBar.value * 100) + "%";
		
	});
}


function localFileVideoPlayer2(){
	
	
	//Load and play video
	var URL = window.URL;
	var inputNode = document.getElementById('videoInput');
	var file = inputNode.files[0];
	var fileURL = URL.createObjectURL(file);
	var videoNode = document.getElementById('video');
	//videoNode.width=160;
	 
    videoNode.src = fileURL;
}
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
//init alarm time
var initAlarm = (jsonContent.alarmOn === "true");
if(initAlarm){
	document.getElementById('alarmSetText').textContent = "Alarm: On";
}
else{
	document.getElementById('alarmSetText').textContent = "Alarm: Off";
}


//document.getElementById('debug').textContent = jsonContent.test;
///////////////////////////////////
//var videoAlarm = "test.png";
//var alarmOn = (jsonContent.alarmOn === "true");
//var wakeUpTime = 0; 		
//var hourTime24	= (jsonContent.hourTime24 === "true"); //changes string to a bool
///////////////////////////////////


/*
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
*/

	
var videoAlarm = "test.png";
var wakeUpTime;
var alarmOn;

var currentTime;
var hourin12;
var hourTime24;
var wakeHour;
var wakeMin;

var refreshId = setInterval(function() {
	/*
	document.getElementById('debug').textContent = getDateTime() + " and " +
													""+wakeHour+wakeMin + " and " +
													getHourMin();
	*/
	
	//Update variables.
	var content = fs.readFileSync("myData/data/settings.json");
	var jsonContent = JSON.parse(content);
	hourTime24	= (jsonContent.hourTime24 === "true");
	alarmOn = (jsonContent.alarmOn === "true");
	wakeUpTime = jsonContent.wakeUpTime;
	
	//Get time
	currentTime = clock.getDateTime();
	
	
	//using 24 hour clock
	if(hourTime24){
		document.getElementById('hoursMins').textContent = currentTime[0] + ":" + currentTime[1];
		document.getElementById('seconds').textContent = "." + currentTime[2]
		document.getElementById('monthYear').textContent = clock.getMonthYear();
		document.getElementById('ampm').textContent = "";
		
		
		if(alarmOn){
			//update alarm time
			document.getElementById('alarmTimeText').textContent = "Alarm Time: " + wakeUpTime;
			
			//check for wakeup
			var splitThingy = wakeUpTime.split(":");
			var blue = "" +splitThingy[0] + splitThingy[1] + splitThingy[2];
			//console.log(blue + " " + clock.getHourMinSec());
			if(clock.getHourMinSec() == blue){
				//cp.exec(videoAlarm);
				//clearInterval(refreshId);
				if (video.paused == true) {
					// Play the video
					video.play();

					// Update the button text to 'Pause'
					playButton.innerHTML = "Pause";
				}
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
			//update alarm time
			var splitString = wakeUpTime.split(":");
			splitString[0] = clock.changeToAMPM(splitString[0]);//change 24 to 12 hour time
			document.getElementById('alarmTimeText').textContent = "Alarm Time: " + splitString[0][0] +
																	":" + splitString[1] +
																	":" + splitString[2] +
																	" " + splitString[0][1];
			
			//check for wakeup
			var splitThingy = wakeUpTime.split(":");
			var blue = "" +splitThingy[0] + splitThingy[1] + splitThingy[2];
			console.log(blue + " " + clock.getHourMinSec());
			if(clock.getHourMinSec() == blue){
				//cp.exec(videoAlarm);
				//clearInterval(refreshId);
				if (video.paused == true) {
					// Play the video
					video.play();

					// Update the button text to 'Pause'
					playButton.innerHTML = "Pause";
				}
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
	//jsonContent.currentColor = colorCombine;
	//fs.writeFileSync("myData/data/settings.json", JSON.stringify(jsonContent));
	
}, 200);

/*
//validate and display files
function readURL(input) {
	if (input.files && input.files[0]) {
		var reader = new FileReader();

		reader.onload = function (e) {
			$('#blah')
				.attr('src', e.target.result)
				.width(150)
				.height(200);
		};

		reader.readAsDataURL(input.files[0]);
	}
	//console.log(input.files[0].name);
	document.getElementById('alarmFileName').textContent = "Alarm Video: " + input.files[0].name;
	var tmppath = URL.createObjectURL(input.files[0]);
	console.log(tmppath + "");
	
	cp.exec(tmppath + "");
	return;
}

*/












