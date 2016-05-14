

var exports = module.exports = {};

//Clock Functions//////////////////
exports.changeToAMPM = function(hour24){
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

exports.getDateTime = function() {
    var date = new Date();

    var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;

    var sec  = date.getSeconds();
    sec = (sec < 10 ? "0" : "") + sec;

	return [hour, min, sec];
}
exports.getMonthYear = function(){
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

exports.getHourMin = function(){
	var date = new Date();
	
	var hour = date.getHours();
    hour = (hour < 10 ? "0" : "") + hour;

    var min  = date.getMinutes();
    min = (min < 10 ? "0" : "") + min;
	
	return "" + hour + min;
}