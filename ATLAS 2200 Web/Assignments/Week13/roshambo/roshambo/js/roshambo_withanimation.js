// code for ro sham bo 


// get the input from user
// randomly choose computer's weapon
// add some animation
// determine winner of the round
// show results of one round

// TODO add UI to allow user to choose number of rounds to determine game
// TODO keep score, and declare game winner
// TODO add reset to allow user to play again



// global variables neded in multiple functions
var playerWeapon;
var computerWeapon;
var winner;
var pScore = 0;
var cScore = 0;
var numRounds;
var winRounds;

function gameOne(){
    numRounds=1;
    winRounds=1;
    console.log(numRounds);
    console.log(winRounds);
}
function  gameTwo(){
    numRounds=3;
    winRounds=2;
    console.log(numRounds);
    console.log(winRounds);
}
function gameThree(){
    numRounds=5;
    winRounds=3;
    console.log(numRounds);
    console.log(winRounds);
}


// play the game - called from buttons' onclick 
function play(weapon) {
  clearResults();
  playerWeapon = weapon;
  chooseComputerWeapon();
  determineWinner();
    gameOver();
    
  
  // this is a small animation that add delays
  changeDivWithDelay("rock", 0);
  changeDivWithDelay("paper", 500);
  changeDivWithDelay("scissors", 1000);
  changeDivWithDelay("shoot", 1500);
  
  // since the animation takes 2 seconds, wait to call showResults until animation is done
  setTimeout(showResults,2000);
}

function clearResults(){
  document.getElementById("result").innerHTML= "";
  document.getElementById("weapons").innerHTML= "";
}

function numRounds(){
    
}
// change class name to cause a transition (see style.css)
// use setTimeout to coordinate delays with other calls to this function
function changeDivWithDelay(elementID, delayMs) {
  setTimeout(function(){document.getElementById(elementID).className = "slideout";},delayMs);
  setTimeout(function(){document.getElementById(elementID).className = "hidden";},delayMs+500);
}

// select the computer's weapon. give each weapon 1 out of 3 chance 
function chooseComputerWeapon() {
  var randomNum = Math.random();
  if (randomNum < 0.33333) {
    computerWeapon = "rock";
  } else if (randomNum < 0.66667) {
    computerWeapon = "paper";
  } else {
    computerWeapon = "scissors";
  }
 // console.log("computer picks "+computerWeapon);
    
}

// logic to determine winner - assume tie, then check for actual winner
function determineWinner() {
  winner = "tie";
  if ((computerWeapon === "rock") && (playerWeapon === "paper")) {
    winner = "player";
    
  }
  if ((computerWeapon === "rock") && (playerWeapon === "scissors")) {
    winner = "computer";
    
  }
  if ((computerWeapon === "paper") && (playerWeapon === "rock")) {
    winner = "computer";
    
  }
  if ((computerWeapon === "paper") && (playerWeapon === "scissors")) {
    winner = "player";
   
  }
   if ((computerWeapon === "scissors") && (playerWeapon === "rock")) {
    winner = "player";
    
  }
  if ((computerWeapon === "scissors") && (playerWeapon === "paper")) {
    winner = "computer";
    
  }
 console.log("computer: "+ computerWeapon + " player:"+ playerWeapon + "->"+ winner);
    if (winner=="computer"){
       cScore++;
   }
    if (winner=="player"){
       pScore++;
   }
    console.log("p"+pScore+"c"+cScore);
}

function gameOver(){
    var Final = pScore+cScore;
    if ((Final > numRounds) || (pScore>winRounds) || (cScore>winRounds)){
    pScore=0;
    cScore=0;
    document.getElementById("pScore").innerHTML = pScore;
    document.getElementById("cScore").innerHTML = cScore;
    document.getElementById("result").innerHTML= "";
    document.getElementById("weapons").innerHTML= "";
        
    }
}
function showResults() {
 console.log(playerWeapon  + " " + computerWeapon + " > "+winner);
  document.getElementById("weapons").innerHTML= "You chose "+playerWeapon+". I chose "+computerWeapon;
  var Final = pScore+cScore;
if ((Final==numRounds)||(pScore==winRounds)|| (cScore==winRounds)){
    
  if (pScore === cScore) {
    document.getElementById("result").innerHTML= "Tie - wanna play again?"
  }
  if (pScore > cScore) {
    document.getElementById("result").innerHTML= "You win!"
  }
  if (pScore < cScore) {
    document.getElementById("result").innerHTML= "I beat you!"
  }
    
}
    document.getElementById("pScore").innerHTML = pScore;
    document.getElementById("cScore").innerHTML = cScore;

}
function myFunction() {
    document.getElementById("myForm").reset();
    pScore=0;
    cScore=0;
    document.getElementById("pScore").innerHTML = pScore;
    document.getElementById("cScore").innerHTML = cScore;
    document.getElementById("result").innerHTML= "";
    document.getElementById("weapons").innerHTML= "";
    
}