
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