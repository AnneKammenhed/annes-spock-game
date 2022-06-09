
/** Constants for DOM elements
and choices
*/

const buttons = document.getElementsByTagName("button");
const playerImage = document.getElementsByClassId("player-image")
const computerImage = document.getElementsByClassId("computer-image")
const playerScore = document.getElementsById("my-score")
const computerScore = document.getElementById("computer-score")
const choices = ("rock", "paper", "scissors", "lizard", "spock");

/**
 * Event listeners for the buttons to call the main game
 */

for (let button of buttons) {
    button.addEventListener("click", function() {
        let playerChoice = this.getAttribute("data-choice"); 
        playGame(playerChoice);
    });
}

/**
 * The main game function playGame, players choise, computer random number and result
*/

function playGame(playerChoice) {
    playerImage.src = `assets/images/${[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 4);

    computerImage.src = `assets/images/${[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];

    let result = checkAnswer(choices[playerChoice], choices[computerChoice]);

    updateScores(result);
}

/**
 * Check answer function checkAnswer
 */
function checkAnswer {
    if(computerChoice === 0 playerChoice === 0) 
        result = draw

    {computerChoice = "Rock";}
        else if(computerChoice === 1) {computerChoice = "Paper";}
        else if(computerChoice === 2) {computerChoice = "Scissors";}
        else if(computerChoice === 3) {computerChoice = "Lizard";}
    else (computerChoice === 4) {computerChoice = "Spock";}

/**
 * add you win / you loose message
 */

if(computerChoice === "Rock") 

}

/** 
 * display player choice
 */
function displayPlayerChoice() {

    if (playerChoice) {
        displayPlayerImage;
    }
}

/**
 * display computer choice
 */

 function displayComputerChoice() {

    if (computerChoice) {
        displayComputerImage;
    } 
 }
 
 /**
 * Add the wins for player and computer incrementScore for spans "my-score" and "computer-score"
 */
function incrementScore {
    
}