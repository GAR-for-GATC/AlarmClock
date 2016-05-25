
function localFileVideoPlayer2(){
	var URL = window.URL;
	var inputNode = document.getElementById('vid2');
	console.log("blue");
	var file = inputNode.files[0];
	var type = file.type;
	var videoNode = document.querySelector('video');
	videoNode.width=160;
	
	
	var canPlay = videoNode.canPlayType(type);
	if (canPlay === '') canPlay = 'no';
	var message = 'Can play type "' + type + '": ' + canPlay
	var isError = canPlay === 'no'
	
	
	console.log("green");
	var element = document.getElementById('message2');
	element.innerHTML = message;
	//element.className = isError ? 'error' : 'info';	
	var fileURL = URL.createObjectURL(file);
	
    videoNode.src = fileURL;
}

/*
function displayMessage2(message, isError) {
	
}

function playSelectedFile2(){
	
}

(function localFileVideoPlayer() {
	
	'use strict';  //tells javascript to run in strict mode.
					//this prevents a lot of common errors that
					//	wont be caught by unstrict javascript
  var URL = window.URL || window.webkitURL; //returns object that has methods to do stuff with web pages.
  var displayMessage = function (message, isError) {
    var element = document.querySelector('#message');	// returns the first element that matches a 
														//	specific css selector.
    element.innerHTML = message; //change the html content.  You can add text and shit using this.
    element.className = isError ? 'error' : 'info'; //className sets the class of an element.
  }
  var playSelectedFile = function (event) {
	console.log("dicks");
    var file = this.files[0]
    var type = file.type
    var videoNode = document.querySelector('video')
    var canPlay = videoNode.canPlayType(type)
    if (canPlay === '') canPlay = 'no'
    var message = 'Can play type "' + type + '": ' + canPlay
    var isError = canPlay === 'no'
    displayMessage(message, isError)

    if (isError) {
      return
    }

    var fileURL = URL.createObjectURL(file)
    videoNode.src = fileURL
  }
  var inputNode = document.querySelector('input')
  inputNode.addEventListener('change', playSelectedFile, false)
})()



*/



