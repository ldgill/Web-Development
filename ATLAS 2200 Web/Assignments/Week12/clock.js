   var twelveHour = true;
	var clockHour = document.getElementById("hour");
    var clockMinute = document.getElementById("minute");
	var clockSecond = document.getElementById("second");
	var clockMeridiem = document.getElementById("meridiem");

	var clockDay = document.getElementById("weekday");
	var clockMonth = document.getElementById("month");
	var clockDate = document.getElementById("date");
	var clockYear = document.getElementById("year");

	var jsClock = document.getElementById("clock");
	 
	var debugCheckBox = document.getElementById("useDebug");
	var debugTimeTextBox = document.getElementById("debugTime");
	var debugDateTextBox = document.getElementById("debugDate");

    var prevHour = 100;


	function getDebugDate() {

	  
	  var timeString = debugTimeTextBox.value; 
	  var timeArray = timeString.split(':', 3);
	  for (var i = 0; i < timeArray.length; i++) {

	    timeArray[i] = parseInt(timeArray[i]);
	  }

	  
	  var dateString = debugDateTextBox.value; 
        
	  var dateArray = dateString.split('/', 3);
	  for (var i = 0; i < dateArray.length; i++) {

	    dateArray[i] = parseInt(dateArray[i]);

	  }
	 
	  var debugDate = new Date(0, dateArray[0] - 1, dateArray[1],
	    timeArray[0], timeArray[1], timeArray[2]);
	  
	  debugDate.setFullYear(dateArray[2])

	  return debugDate;
	}

	function changeTime() {
	  
	  var today = new Date();
	  
	  if (debugCheckBox && debugCheckBox.checked) {
	    today = getDebugDate();
	  }
	  var hour = today.getHours();
	  var minute = today.getMinutes();
	  var second = today.getSeconds();

	  var day = today.getDay();
	  var month = today.getMonth();
	  var date = today.getDate();
	  var year = today.getFullYear();
	  
	  var daysOfTheWeek = [
        "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday",
        "Saturday"
        ];

	  var monthsOfTheYear = [
        "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"
        ];
     
	  if (minute < 10) {
	    minute = "0" + minute;
	  }

	  if (second < 10) {
	    second = "0" + second;
	  }

	  if (twelveHour == true) {
	    clockMeridiem.style.display = "inline-block";
	    if (hour > 11) {
	      clockMeridiem.innerHTML = "pm";
	    } else {
	      clockMeridiem.innerHTML = "am";
	    }
	  } else {
	    clockMeridiem.style.display = "none";
	  }

	  if (twelveHour == true) {
	    if (hour > 12) {
	      hour = hour - 12;
	    }
	  }

	  
	  jsClock.style.color = "rgb(" + hour * 10 + "," + minute * 5 + "," + second * 5 + ")";
	  
	  clockHour.innerHTML = hour;
	  clockMinute.innerHTML = minute;
	  clockSecond.innerHTML = second;

	  clockDay.innerHTML = daysOfTheWeek[day];
	  clockMonth.innerHTML = monthsOfTheYear[month];
	  clockDate.innerHTML = date;
	  clockYear.innerHTML = year;

	  changeStuff();
	}

	function switchTo12() {
	  twelveHour = true;
	}

	function switchTo24() {
	  twelveHour = false;
	}

	function addGreeting(hour) {
	  var greeting = "Time to do stuff!"
	  if (hour < 4) {
	    greeting = "Good Night";
	  } else if (hour < 12) {
	    greeting = "Good Morning!";
	  } else if (hour < 18) {
	    greeting = "Good Afternoon!";
	  } else if (hour < 21) {
	    greeting = "Late Night Study Time";
	  }
	  document.getElementById("greeting").innerHTML = greeting;
	}

     function getSeason(month) {
         var greeting = "What season is it?"
         if (month<3) {
        return "Winter";
      } else if (month<6){
        return "Spring";
      } else if (month<9){
         return "Summer";
      } else {
        return "Fall";
      }
     }
    
 
function changeFontSize(element, size){
    var pxStr = size + "px";
    element.style.fontSize=pxStr;
}

 
function changeColorBasedOnMinuteValue(element, date){
    var minute = date.getMinutes();
    var color = "";
    if (minute <30) {
        color = "";
    }
    
    element.style.color = color;
}


	function changeStuff() {
	 
	  var nowToday = new Date();
	 
	  if (debugCheckBox && debugCheckBox.checked) {
	    nowToday = getDebugDate();
	   
	  }
	  var nowHour = nowToday.getHours();
      var month = nowToday.getMonth();
	  var changeBg = document.getElementById("home");
	  changeBg.style.backgroundImage = "url('winter.jpg')";

	  if (month > 2) {
	    changeBg.style.backgroundImage = "url('spring.jpg')";
      }
        if (month > 5) {
	    changeBg.style.backgroundImage = "url('summer.jpg')";
	  }
        
        if (month > 8) {
	    changeBg.style.backgroundImage = "url('fall.jpg')";
	  }
	  

	  addGreeting(nowHour);
      document.getElementById("season").innerHTML = getSeason(month);
      
      var secElement = document.getElementById("second");
      var minElement = document.getElementById("minute");
      var nowSec = nowToday.getSeconds();
      
      changeFontSize(secElement,nowSec);
      changeColorBasedOnMinuteValue(minElement,nowToday);
        
        if(nowHour != prevHour){
            prevHour = nowHour;
            document.getElementById("lucky").innerHTML = "Your lucky number is " + Math.floor(100*Math.random());
        }
      
	}

	changeTime();
	setInterval(changeTime, 500);
	changeStuff();