
var imagescore;
imagescore = 0;

var webscore;
webscore = 0;

var formscore;
formscore=0;

function quizcheck(form) {

	var choice1;
	choice1=document.getElementById("question1").selectedIndex;

	var choice2;
	choice2=document.getElementById("question2").selectedIndex;

	var choice3;
	choice3=document.getElementById("question3").selectedIndex;

        
	if (choice1==0){ //Alerts the user if they did not answer question 1.
	 	alert("You have not answered question 1");
	}
	if (choice2==0){ //Alerts the user if they did not answer question 2.
		alert("You have not answered question 2");
	}
	if (choice3==0){ //Alerts the user if they did not answer question 3.
		alert("You have not answered question 3");
	
	} else {
	
		if (choice1==1){
			imagescore++;
		}

		if (choice1==2){
			webscore++;
		}

		if (choice1==3){
			formscore++;
		}


	    
	    if (choice2==1){ 
			imagescore++;
		}

		if (choice2==2){
			webscore++;
		}

		if (choice2==3){ 
			formscore++;
		}



		if (choice3==1){ 
			imagescore++;
		}

		if (choice3==2){ 
			webscore++;
		}

		if (choice3==3){ 
			formscore++;
		}



		document.getElementById("imagedisplay").innerHTML = imagescore;
		document.getElementById("webdisplay").innerHTML = webscore;
		document.getElementById("formdisplay").innerHTML = formscore;


			
		if(webscore > imagescore && webscore > formscore){
			window.location.href="http://www.google.com";
			//window.open("http://www.colorado.edu");
		}

		if(imagescore > webscore && imagescore > formscore){
			window.location.href="http://www.colorado.edu";
		}

		if(formscore > webscore && formscore > imagescore){
			window.location.href="http://atlas.colorado.edu";
		}

		if(formscore == 1 && webscore == 1 && imagescore == 1){
			window.location.href="http://creative.colorado.edu/~halesi";
		}
		

		imagescore = 0;
		webscore = 0;
		formscore = 0;

	}
}