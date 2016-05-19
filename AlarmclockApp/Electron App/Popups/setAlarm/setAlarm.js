 
///////////////////////////////////////////////////////////////
//Functions for 12 hour form inputs////////////////////////////
///////////////////////////////////////////////////////////////
 
//when the form is full, jump to next form
function check1(key){
	var numbers = document.hourmin.hour12.value.length + 1;
	if (numbers <= 3){		
		document.hourmin.hour12.focus()
	}
	else{
		//deletes the last number entered
		var strng=document.getElementsByName("hour12")[0].value;
		document.getElementsByName("hour12")[0].value=strng.substring(0,strng.length-1)
		
		//move last entered number to the next form entry box
		var event = window.event ? window.event : key;
		document.hourmin.min12.focus();
		document.getElementsByName('min12')[0].value = String.fromCharCode(event.keyCode);	
		//console.log(String.fromCharCode(event.keyCode));
		//console.log(key);
	}
}

//if the form is full, jump to next form, else go back to the first form
var counter2 = 0;
function check2(){
	
	var numbers = document.hourmin.min12.value.length + 1;
	//console.log(numbers + " " + numberLength);
	//console.log("numbers: "+ numbers);
	var cursorLocation = document.getElementsByName("hour12");
	console.log(cursorLocation[0].selectionStart);
	
	var event = window.event ? window.event : key;
	if(event.keyCode == 37 ){//left arrow key
		document.hourmin.hour12.focus();
		counter2 = 0;
		return;
	}
	if (numbers <= 3 && numbers != 1){		
		document.hourmin.min12.focus();
	}
	//if empty and the backspace key is entered, jump focus to the previous entry
	else if(numbers == 1){
		
		if(event.keyCode == 8){//if backspace
			if(counter2 === 0){//used for the first backspace
				counter2 = counter2 + 1;				
			}
			//this is here if the user clicks on this when there's no input.  
			//	lets the user only use 1 backspace instead of 2 to navigate back
			else{//used for second backspace
				document.hourmin.hour12.focus();
				counter2 = 0;
				return;
			}			
		}
		//if cursor is on the left side, and you use the left arrow, go to
		//	previous box.
		
		//console.log("Purple" + event.keyCode);
	}
	else{
		//deletes the last number entered
		var strng=document.getElementsByName("min12")[0].value;
		document.getElementsByName("min12")[0].value=strng.substring(0,strng.length-1);
		
		//move last entered number to the next form entry box
		var event = window.event ? window.event : key;
		document.hourmin.sec12.focus();
		document.getElementsByName('sec12')[0].value = String.fromCharCode(event.keyCode);
		
		//clean up variables on focus out event
		counter2 = 0;	
		return;
		//console.log(String.fromCharCode(event.keyCode));
		//console.log(key);
	}
	
}	

//when backspace is pressed, go back.
var counter3 = 0;
function check3(){
	var numbers = document.hourmin.sec12.value.length + 1;
	
	//console.log("numbers: "+ numbers);
	if (numbers != 1){		
		document.hourmin.sec12.focus()
	}
	//if empty and the backspace key is entered, jump focus to the previous entry
	if(numbers == 1){
		var event = window.event ? window.event : key;
		if(event.keyCode == 8){ 
			if(counter3 === 0){//used for the first backspace
				counter3 = counter3 + 1;
			}
			else{
				document.hourmin.min12.focus();
				counter3 = 0;
			}			
		}
		//console.log("Purple" + event.keyCode);
	}
}

///////////////////////////////////////////////////////////////
//Functions for 24 hour form inputs////////////////////////////
///////////////////////////////////////////////////////////////

function check4(key){
	var numbers = document.hourmin.hour24.value.length + 1;
	if (numbers <= 3){		
		document.hourmin.hour24.focus()
	}
	else{
		//deletes the last number entered
		var strng=document.getElementsByName("hour24")[0].value;
		document.getElementsByName("hour24")[0].value=strng.substring(0,strng.length-1)
		
		//move last entered number to the next form entry box
		var event = window.event ? window.event : key;
		document.hourmin.min24.focus();
		document.getElementsByName('min24')[0].value = String.fromCharCode(event.keyCode);	
		//console.log(String.fromCharCode(event.keyCode));
		//console.log(key);
	}
}

var counter5 = 0;
function check5(){
	
	var numbers = document.hourmin.min24.value.length + 1;
	
	//console.log("numbers: "+ numbers);
	if (numbers <= 3 && numbers != 1){		
		document.hourmin.min24.focus()
	}
	//if empty and the backspace key is entered, jump focus to the previous entry
	else if(numbers == 1){
		var event = window.event ? window.event : key;
		if(event.keyCode == 8){ 
			if(counter5 === 0){//used for the first backspace
				counter5 = counter5 + 1;
			}
			else{
				document.hourmin.hour24.focus();
				counter5 = 0;
			}			
		}
		//console.log("Purple" + event.keyCode);
	}
	else{
		//deletes the last number entered
		var strng=document.getElementsByName("min24")[0].value;
		document.getElementsByName("min24")[0].value=strng.substring(0,strng.length-1)
		
		//move last entered number to the next form entry box
		var event = window.event ? window.event : key;
		document.hourmin.sec24.focus();
		document.getElementsByName('sec24')[0].value = String.fromCharCode(event.keyCode);	
		//console.log(String.fromCharCode(event.keyCode));
		//console.log(key);
	}
	
}

//when backspace is pressed, go back.
var counter6 = 0;
function check6(){
	var numbers = document.hourmin.sec24.value.length + 1;
	
	//console.log("numbers: "+ numbers);
	if (numbers != 1){		
		document.hourmin.sec24.focus()
	}
	//if empty and the backspace key is entered, jump focus to the previous entry
	if(numbers == 1){
		var event = window.event ? window.event : key;
		if(event.keyCode == 8){ 
			if(counter6 === 0){//used for the first backspace
				counter6 = counter6 + 1;
			}
			else{
				document.hourmin.min24.focus();
				counter6 = 0;
			}			
		}
		//console.log("Purple" + event.keyCode);
	}
}