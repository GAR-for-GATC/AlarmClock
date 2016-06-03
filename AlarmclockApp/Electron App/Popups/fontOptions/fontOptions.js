 
 var fs = require("fs");
 
//populate boxes with info.
window.onload = function() {
	
	var dateSize = document.getElementsByName('entry0')[0];
	var hrminSize = document.getElementsByName('entry1')[0];
	var secondSize = document.getElementsByName('entry2')[0];
	var ampmSize = document.getElementsByName('entry3')[0];
	
	var content = fs.readFileSync("./resources/app/myData/data/settings.json");
	var jsonContent = JSON.parse(content);
	
	dateSize.value = jsonContent.FS0 + "px";
	hrminSize.value = jsonContent.FS1 + "px";
	secondSize.value = jsonContent.FS2 + "px";
	ampmSize.value = jsonContent.FS3 + "px";
}


function closeWindow(){
	//window.open('','_parent',''); 
	window.close();
	return;	
}

//used this as inspiration:
//http://www.jankoatwarpspeed.com/wp-content/uploads/examples/reinventing-drop-down/#
//opens the dropdownbox when clicked.
var dropdown = document.getElementById("fontDropdown").getElementsByTagName("dt")[0].getElementsByTagName("a")[0];
var toggleThis = document.getElementById("fontDropdown").getElementsByTagName("dd")[0].getElementsByTagName("ul")[0];
dropdown.addEventListener("click", function () {	
	toggleThis.style.display = (toggleThis.style.display == "none") ? "inline" : "none"; //if "none", change to "inline", else "none"
	console.log(toggleThis.style.display);
});

//this block of code changes the HTML in the parent box of the dropdown box
var getParentAnchor = function (element) {
	while (element !== null) {
		if (element.tagName.toUpperCase() === "A") {
			return element;
		}
		element = element.parentNode;
	}
	
	return null;
};
var dropdownLink = document.getElementById("fontDropdown").getElementsByTagName("dd")[0].getElementsByTagName("ul")[0];
dropdownLink.addEventListener('click', function(e){
	var anchor = getParentAnchor(e.target);
	if(anchor !== null) {
		console.log(anchor.textContent);
		dropdown.innerHTML = anchor.textContent; //update box text
		toggleThis.style.display = "none"; //close dropdown
		console.log("green");
	}
	
}, false);

//if a user clicks outside of the dropdown, then close the
//	dropdown box.
document.addEventListener('click', function (e) {
	if (e.target.id != 'fontDropdown'){
		var a = e.target;
		var counter = 0;
		while(a.tagName != "HTML"){
			a = a.parentNode;
			if(a.id == "fontDropdown"){
				counter = counter + 1;
				break;
			}
		}		
		//console.log(e.target.tagName);
		if(counter === 0 && toggleThis.style.display == "inline"){
			toggleThis.style.display = "none"; 
			//console.log("purple");
			console.log(a.tagName);
			return;					
		}	
	}
});















