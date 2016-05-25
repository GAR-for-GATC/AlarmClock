 var fs = require("fs");
 
 window.onload = function() {
	//fill in form data
	
	//var clock = require('./myData/js/time.js');
	var content = fs.readFileSync("myData/data/settings.json");
	var jsonContent = JSON.parse(content);
	//console.log(jsonContent.wakeUpTime);
	//since wakeup time is stored in 24 hours, change to 12 hours
	//numbers stored as "HH:MM:SS"	
	if(jsonContent.wakeUpTime == 0){
		return;
	}
	
	var hourTime24 = (jsonContent.hourTime24 === "true");
	
		var check12 = document.getElementsByName('checkBox12')[0];
		var check24 = document.getElementsByName('checkBox24')[0];
		if(hourTime24){
			check24.setAttribute("checked", "checked");
			check12.removeAttribute("checked", "checked");
		}
		else{
			check24.removeAttribute("checked", "checked");
			check12.setAttribute("checked", "checked");
		}
		
		
	
	var splitString = jsonContent.wakeUpTime.split(":");
	
	document.getElementsByName("hour24")[0].value = splitString[0];
	document.getElementsByName("min24")[0].value = splitString[1];
	document.getElementsByName("sec24")[0].value = splitString[2];
	
	var changeTo12hour = changeToAMPM(splitString[0]);
	document.getElementsByName("hour12")[0].value = changeTo12hour[0];
	document.getElementsByName("min12")[0].value = splitString[1];
	document.getElementsByName("sec12")[0].value = splitString[2];	
	if(changeTo12hour[1] == "PM"){
		document.getElementsByName("PM")[0].setAttribute("selected", "selected");
	}
	else{
		document.getElementsByName("AM")[0].setAttribute("selected", "selected");
	}
	

	return;	
};

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



//focus on top right if any button is pressed and there's no focus
function globalfocus(){
	//document.hourmin.hour12.focus();
	//console.log(document.activeElement.tagName);
    if (document.activeElement.tagName == "BODY") {
		document.hourmin.hour12.focus();
        //console.log("COCKS");
    }
}


//clears all spaces.
function clear12(){
	document.getElementsByName("hour12")[0].value = "";
	document.getElementsByName("min12")[0].value = "";
	document.getElementsByName("sec12")[0].value = "";
	return;
}
 
function clear24(){
	document.getElementsByName("hour24")[0].value = "";
	document.getElementsByName("min24")[0].value = "";
	document.getElementsByName("sec24")[0].value = "";
	return;
}

function closeWindow(){
	//window.open('','_parent',''); 
	window.close();
	return;	
}
 
///////////////////////////////////////////////////////////////
//Functions for 12 hour form inputs////////////////////////////
///////////////////////////////////////////////////////////////
 
//when the form is full, jump to next form
function check1(key){
	
	var cursorLocation = document.getElementsByName("hour12")[0].selectionStart;
	//console.log(cursorLocation + " purple");
	var event = window.event ? window.event : key;
	var goRight = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];	
	//if there's nothing in the form validation box, and you use the right arrow key, 
	//	you skip the box.
	//console.log("numbers " + numbers);
	var numbers = document.hourmin.hour12.value.length;
	if(numbers == 0 && event.keyCode == 39 && cursorLocation == 0){
		var strng=document.getElementsByName("min12")[0];
		
		setTimeout(function() {
			strng.focus();
			strng.setSelectionRange(0, 0);	
			
		}, 10);
		
		return;	
	}
	if(cursorLocation == 2 && (goRight.indexOf(event.keyCode) >= 0)){
		var strng=document.getElementsByName("min12")[0];
		//sets cursor at beginning
		setTimeout(function() {
			strng.focus();
			strng.setSelectionRange(1, 1);				
		}, 10);	
		document.getElementsByName('min12')[0].value = String.fromCharCode(event.keyCode);	
		return;	
	}
	//use right arrow key
	if(cursorLocation !=0 && event.keyCode == 39){
		var strng=document.getElementsByName("min12")[0];
		
		setTimeout(function() {
			strng.focus();
			strng.setSelectionRange(0, 0);	
			
		}, 10);
		
		return;	
	}
	
	if(event.keyCode == 38){//up
		var strng = document.getElementsByName("submitButton")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 40){//down
		var strng = document.getElementsByName("hour24")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 37){//left
		var strng=document.getElementsByName("checkBox12")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	
}

//if the form is full, jump to next form, else go back to the first form
function check2(key){
	var cursorLocation = document.getElementsByName("min12")[0].selectionStart;
	//console.log(cursorLocation + " cocks");
	
	var event = window.event ? window.event : key;
	
	var numbers = document.hourmin.min12.value.length;
	if(numbers == 0 && event.keyCode == 39 && cursorLocation == 0){
		var strng=document.getElementsByName("sec12")[0];
		
		setTimeout(function() {
			strng.focus();
			strng.setSelectionRange(0, 0);	
			
		}, 10);
		
		return;	
	}
	//if you use the left arrow key and the cursor is 
	//	on the left side of the text input
	if(event.keyCode == 37 && cursorLocation == 0){
		
		setTimeout(function() {//this is needed 
			document.hourmin.hour12.focus();			
		}, 10);
		
		return;
	}
	if(event.keyCode == 8 && cursorLocation == 0){//if backspace
		document.hourmin.hour12.focus();
		return;					
	}
	//if cursor is at the second location, but backspace, and left arent pressed
	//	go right if you enter a number, or a right arrow key.  Array contains ascii for
	//	numbers and right arrow key
	var goRight = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
	//, 39
	if(cursorLocation == 2 && (goRight.indexOf(event.keyCode) >= 0)){
		var strng=document.getElementsByName("sec12")[0];
		//Deletes the first element in the next form input
		//document.getElementsByName("sec12")[0].value = strng.value.substring(1,strng.value.length);
		//sets cursor at beginning
		setTimeout(function() {
			strng.focus();
			strng.setSelectionRange(1, 1);				
		}, 10);	
		document.getElementsByName('sec12')[0].value = String.fromCharCode(event.keyCode);	
		return;		
	}
	//using the right arrow key
	if(cursorLocation !=0 && event.keyCode == 39){
		var strng=document.getElementsByName("sec12")[0];
		
		setTimeout(function() {
			strng.focus();
			strng.setSelectionRange(0, 0);	
			
		}, 10);
		
		return;	
	}
	
	if(event.keyCode == 38){//up
		var strng = document.getElementsByName("min24")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 40){//down
		var strng=document.getElementsByName("min24")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
}	

//when backspace is pressed, go back.

function check3(key){
	var cursorLocation = document.getElementsByName("sec12")[0].selectionStart;
	var event = window.event ? window.event : key;
	
	//left arrow key
	if(event.keyCode == 37 && cursorLocation == 0){
		setTimeout(function() {//this is needed 
			document.hourmin.min12.focus();			
		}, 10);
		return;
	}
	if(event.keyCode == 8 && cursorLocation == 0){//if backspace
		document.hourmin.min12.focus();
		return;					
	}
	
	//right arrow key
	var numbers = document.hourmin.hour24.value.length;
	if(numbers == 0 && event.keyCode == 39 && cursorLocation == 0){
		var strng=document.getElementsByName("dropdown")[0];
		
		setTimeout(function() {
			strng.focus();
			//strng.setSelectionRange(0, 0);	
			
		}, 10);
		
		return;	
	}
	//using the right arrow key
	if(cursorLocation !=0 && event.keyCode == 39){
		var strng=document.getElementsByName("dropdown")[0];
		
		setTimeout(function() {
			strng.focus();
			//strng.setSelectionRange(0, 0);	
			
		}, 10);
		
		return;	
	}
	if(event.keyCode == 38){//up
		var strng = document.getElementsByName("sec24")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 40){//down
		var strng=document.getElementsByName("sec24")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
}

//used to go in between the input boxes and the form input submit button	
function checkDrop(){
	var event = window.event ? window.event : key;
	//when right button is pressed, go to submit
	if(event.keyCode == 39){
		var strng=document.getElementsByName("clear12")[0];
		
		setTimeout(function() {
			strng.focus();
			//strng.setSelectionRange(0, 0);	
			
		}, 10);
		event.preventDefault();
		return;	
	}
	//left arrow key to the clear button
	if(event.keyCode == 37){
		setTimeout(function() {//this is needed 
			document.hourmin.sec12.focus();			
		}, 10);
		event.preventDefault()
		return;
	}
	
}

//Left arrow key goes to the dropdown,
//	right goes to submit, down goes to the 
//	other clear button
function checkClear12(){
	if(event.keyCode == 39){//right
		var strng=document.getElementsByName("submitButton")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 37){//left
		var strng=document.getElementsByName("dropdown")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 38){//up
		var strng=document.getElementsByName("cancelButton")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 40){//down
		var strng=document.getElementsByName("clear24")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 13){//enter
		clear12();
	}
}


///////////////////////////////////////////////////////////////
//Functions for 24 hour form inputs////////////////////////////
///////////////////////////////////////////////////////////////

function check4(key){
	var cursorLocation = document.getElementsByName("hour24")[0].selectionStart;
	//console.log(cursorLocation + " purple");
	var event = window.event ? window.event : key;
	var goRight = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];	

	var numbers = document.hourmin.hour24.value.length;
	if(numbers == 0 && event.keyCode == 39 && cursorLocation == 0){
		var strng=document.getElementsByName("min24")[0];
		
		setTimeout(function() {
			strng.focus();
			strng.setSelectionRange(0, 0);	
			
		}, 10);
		
		return;	
	}
	
	if(cursorLocation == 2 && (goRight.indexOf(event.keyCode) >= 0)){
		var strng=document.getElementsByName("min24")[0];
		//sets cursor at beginning
		setTimeout(function() {
			strng.focus();
			strng.setSelectionRange(1, 1);				
		}, 10);	
		document.getElementsByName('min24')[0].value = String.fromCharCode(event.keyCode);	
		return;	
	}
	//use right arrow key
	if(cursorLocation !=0 && event.keyCode == 39){
		var strng=document.getElementsByName("min24")[0];
		
		setTimeout(function() {
			strng.focus();
			strng.setSelectionRange(0, 0);	
			
		}, 10);
		
		return;	
	}
	
	if(event.keyCode == 40){//down
		var strng = document.getElementsByName("submitButton")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 38){//up
		var strng=document.getElementsByName("hour12")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 37){//left
		var strng=document.getElementsByName("checkBox24")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	
}


function check5(key){
	
	var cursorLocation = document.getElementsByName("min24")[0].selectionStart;
	//console.log(cursorLocation + " cocks");
	
	var event = window.event ? window.event : key;
	
	
	var numbers = document.hourmin.min24.value.length;
	if(numbers == 0 && event.keyCode == 39 && cursorLocation == 0){
		var strng=document.getElementsByName("sec24")[0];
		
		setTimeout(function() {
			strng.focus();
			strng.setSelectionRange(0, 0);	
			
		}, 10);
		
		return;	
	}
	//if you use the left arrow key and the cursor is 
	//	on the left side of the text input
	if(event.keyCode == 37 && cursorLocation == 0){
		
		setTimeout(function() {//this is needed 
			document.hourmin.hour24.focus();			
		}, 10);
		
		return;
	}
	if(event.keyCode == 8 && cursorLocation == 0){//if backspace
		document.hourmin.hour24.focus();
		return;					
	}
	//if cursor is at the second location, but backspace, and left arent pressed
	//	go right if you enter a number, or a right arrow key.  Array contains ascii for
	//	numbers and right arrow key
	var goRight = [48, 49, 50, 51, 52, 53, 54, 55, 56, 57];
	//, 39
	if(cursorLocation == 2 && (goRight.indexOf(event.keyCode) >= 0)){
		var strng=document.getElementsByName("sec24")[0];
		//Deletes the first element in the next form input
		//document.getElementsByName("sec12")[0].value = strng.value.substring(1,strng.value.length);
		//sets cursor at beginning
		setTimeout(function() {
			strng.focus();
			strng.setSelectionRange(1, 1);				
		}, 10);	
		document.getElementsByName('sec24')[0].value = String.fromCharCode(event.keyCode);	
		return;		
	}
	//using the right arrow key
	if(cursorLocation != 0 && event.keyCode == 39){
		var strng=document.getElementsByName("sec24")[0];
		
		setTimeout(function() {
			strng.focus();
			strng.setSelectionRange(0, 0);	
			
		}, 10);
		
		return;	
	}
	if(event.keyCode == 38){//up
		var strng = document.getElementsByName("min12")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 40){//down
		var strng=document.getElementsByName("min12")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
}

//when backspace is pressed, go back.
function check6(){
	var cursorLocation = document.getElementsByName("sec24")[0].selectionStart;
	var event = window.event ? window.event : key;
	if(event.keyCode == 37 && cursorLocation == 0){
		setTimeout(function() {//this is needed 
			document.hourmin.min24.focus();			
		}, 10);
		return;
	}
	if(event.keyCode == 8 && cursorLocation == 0){//if backspace
		document.hourmin.min24.focus();
		return;					
	}
	if(event.keyCode == 39){//right
		var strng=document.getElementsByName("clear24")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 38){//up
		var strng = document.getElementsByName("sec12")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 40){//down
		var strng=document.getElementsByName("sec12")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
}

function checkClear24(){
	if(event.keyCode == 39){//right
		var strng=document.getElementsByName("submitButton")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 37){//left
		var strng=document.getElementsByName("sec24")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 40){//down
		var strng=document.getElementsByName("cancelButton")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 38){//up
		var strng=document.getElementsByName("clear12")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 13){//enter
		clear24();
	}
}

function checkSubmit(){
	if(event.keyCode == 39){//right
		var strng=document.getElementsByName("cancelButton")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 37){//left
		var strng=document.getElementsByName("cancelButton")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}	
	if(event.keyCode == 38){//up
		var strng=document.getElementsByName("hour24")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 40){//down
		var strng = document.getElementsByName("hour12")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 13){
		submitValues();
	}
}

function submitValues(){
	//package data
	var check12 = document.getElementsByName('checkBox12')[0];
	var togAlarmContent = fs.readFileSync("myData/data/settings.json");
	var togAlarmJson = JSON.parse(togAlarmContent);
	
	if(check12.checked){
		var values = 	[document.getElementsByName("hour12")[0].value,
						document.getElementsByName("min12")[0].value,
						document.getElementsByName("sec12")[0].value];
		
		//if the user didnt enter anything, change values to 0
		for(i=0; i<values.length; i++){
			if(values[i] == null){
				values[i] = 0;
			}
		}
		//validate form
		if(values[0] > 12){
			//change alert to its own stand alone html box
			alert("Please enter a number between 1 and 12 hours.");
			return;
		}
		if(values[1] > 60){
			alert("Please enter a number between 0 and 60 mins.");
			return;
		}	
		if(values[2] > 60){
			alert("Please enter a number between 0 and 60 seconds.");
			return;
		}
		
		// if PM is selected, change to PM
		var e = document.getElementsByName("dropdown")[0];
		//var amOrPm = e.options[e.selectedIndex].value;
		var amOrPm = e.options[e.selectedIndex].text;
		if(amOrPm == "PM"){
			values[0] = parseInt(values[0]) + 12;
		}	
		
		
		var output = values[0] + ":" + values[1] + ":" + values[2];	
		console.log(output, + " " + amOrPm );
		togAlarmJson.wakeUpTime = output;
		fs.writeFileSync("myData/data/settings.json", JSON.stringify(togAlarmJson));
		window.close();
		return;
	}
	else{
		var values = 	[document.getElementsByName("hour24")[0].value,
						document.getElementsByName("min24")[0].value,
						document.getElementsByName("sec24")[0].value];
						
		//validate form
		if(values[0] > 24){
			//change alert to its own stand alone html box
			alert("Please enter a number between 1 and 24 hours.");
			return;
		}
		if(values[1] > 60){
			alert("Please enter a number between 0 and 60 mins.");
			return;
		}	
		if(values[2] > 60){
			alert("Please enter a number between 0 and 60 seconds.");
			return;
		}
		var output = values[0] + ":" + values[1] + ":" + values[2];	
		console.log(output );
		togAlarmJson.wakeUpTime = output;
		fs.writeFileSync("myData/data/settings.json", JSON.stringify(togAlarmJson));
		window.close();
		return;
	}
	
}

function checkCancel(){
	if(event.keyCode == 39){//right
		var strng=document.getElementsByName("submitButton")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 37){//left
		var strng=document.getElementsByName("submitButton")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 40){//down
		var strng=document.getElementsByName("clear12")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 38){//up
		var strng=document.getElementsByName("clear24")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
}

function checkCheckBox12(){
	if(event.keyCode == 39){//right
		var strng=document.getElementsByName("hour12")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 37){//left
		var strng=document.getElementsByName("clear12")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 40){//down
		var strng=document.getElementsByName("checkBox24")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 38){//up
		var strng=document.getElementsByName("checkBox24")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 13){//enter key
		var check12 = document.getElementsByName('checkBox12')[0];
		var check24 = document.getElementsByName('checkBox24')[0];
		if(check12.checked == true){
			//check12.removeAttribute("checked", "checked");
			//check24.setAttribute("checked", "checked");
			check24.checked = true; 
			check12.checked = false;
		}
		else{
			//check12.setAttribute("checked", "checked");
			//check24.removeAttribute("checked", "checked");
			check24.checked = false; 
			check12.checked = true;
		}
		
	}
	
}

function checkCheckBox24(){
	if(event.keyCode == 39){//right
		var strng=document.getElementsByName("hour24")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 37){//left
		var strng=document.getElementsByName("clear24")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 40){//down
		var strng=document.getElementsByName("submitButton")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	if(event.keyCode == 38){//up
		var strng=document.getElementsByName("checkBox12")[0];		
		setTimeout(function() {
			strng.focus();			
		}, 10);		
		return;	
	}
	
	if(event.keyCode == 13){//enter key
		var check12 = document.getElementsByName('checkBox12')[0];
		var check24 = document.getElementsByName('checkBox24')[0];
		if(check24.checked == true){
			//check24.removeAttribute("checked", "checked");
			//check12.setAttribute("checked", "checked");
			check24.checked = false; 
			check12.checked = true; 
		}
		else{
			//check24.setAttribute("checked", "checked");
			//check12.removeAttribute("checked", "checked");
			check24.checked = true; 
			check12.checked = false;
		}
		return;
		
	}
}

//when clicked, toggle the other checkbox.
function toggle24(){
	setTimeout(function() {
		var check12 = document.getElementsByName('checkBox12')[0];
		var check24 = document.getElementsByName('checkBox24')[0];
		if(check24.checked == true){
			//check12.removeAttribute("checked", "checked");
			check12.checked = false; 
			//check24.setAttribute("checked", "checked");
			console.log("cocks");
		}
		else{
			//check12.setAttribute("checked", "checked");
			check12.checked = true
			//check24.removeAttribute("checked", "checked");
			console.log("boobs");
		}
		return;
	}, 20);
	
}

function toggle12(){
	setTimeout(function() {
		var check12 = document.getElementsByName('checkBox12')[0];
		var check24 = document.getElementsByName('checkBox24')[0];
		if(check12.checked == true){
			//check12.removeAttribute("checked", "checked");
			check24.checked = false; 
			//check24.setAttribute("checked", "checked");
			console.log("cocks");
		}
		else{
			//check12.setAttribute("checked", "checked");
			check24.checked = true
			//check24.removeAttribute("checked", "checked");
			console.log("boobs");
		}
		return;
	}, 20);
}


