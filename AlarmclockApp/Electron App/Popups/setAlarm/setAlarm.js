 
 window.onload = function() {
	//fill in form data
	
};


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
	console.log(cursorLocation + " purple");
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
}

//if the form is full, jump to next form, else go back to the first form
function check2(key){
	var cursorLocation = document.getElementsByName("min12")[0].selectionStart;
	console.log(cursorLocation + " cocks");
	
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
}

//used to go in between the input boxes and the form input submit button	
function checkDrop(){
	var event = window.event ? window.event : key;
	//when right button is pressed, go to submit
	if(event.keyCode == 39){
		var strng=document.getElementsByName("submitButton")[0];
		
		setTimeout(function() {
			strng.focus();
			//strng.setSelectionRange(0, 0);	
			
		}, 10);
		
		return;	
	}
	//left arrow key
	if(event.keyCode == 37){
		setTimeout(function() {//this is needed 
			document.hourmin.sec12.focus();			
		}, 10);
		return;
	}
	
}


///////////////////////////////////////////////////////////////
//Functions for 24 hour form inputs////////////////////////////
///////////////////////////////////////////////////////////////

function check4(key){
	var cursorLocation = document.getElementsByName("hour24")[0].selectionStart;
	console.log(cursorLocation + " purple");
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
	//use left arrow key
	if(cursorLocation !=0 && event.keyCode == 39){
		var strng=document.getElementsByName("min24")[0];
		
		setTimeout(function() {
			strng.focus();
			strng.setSelectionRange(0, 0);	
			
		}, 10);
		
		return;	
	}
}


function check5(key){
	
	var cursorLocation = document.getElementsByName("min24")[0].selectionStart;
	console.log(cursorLocation + " cocks");
	
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
}