// code for ro sham bo 


// get the input from user
// randomly choose computer's weapon
// determine winner of the round
// show results of one round

// TODO add UI to allow user to choose number of rounds to determine game
// TODO keep score, and declare game winner




// global variables neded in multiple functions
var playerWeapon;
var computerWeapon;
var winner;


// play the game - called from buttons' onclick
function play(weapon) {
  
  playerWeapon = weapon;
    console.log("player:" +playerWeapon)
  chooseComputerWeapon();
  determineWinner();
  showResults();
}




// select the computer's weapon. give each weapon 1 out of 3 chance 
function chooseComputerWeapon() {
  var randomNumber = Math.random();
    if(randomNumber < 0.333333){
        computerWeapon= "rock";
    } else if (randomNumber < 0.666666){
        computerWeapon= "paper";
    } else {
        computerWeapon= "scissors";
    }
    
    console.log("computer weapon is:" + computerWeapon)
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
   
}


function showResults() {
 console.log(playerWeapon  + " " + computerWeapon + "->"+winner);
  
    document.getElementById("weapons").innerHTML= "You chose "+playerWeapon+". I chose "+computerWeapon;
  
  if (winner === "tie") {
    document.getElementById("result").innerHTML= "Tie - wanna play again?"
  }
  if (winner === "player") {
    document.getElementById("result").innerHTML= "You win!"
  }
  if (winner === "computer") {
    document.getElementById("result").innerHTML= "I beat you!"
  }
}
