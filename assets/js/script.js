
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
 * The main game function playGame
*/

function playGame(playerChoice) {
    playerImage.src = `assets/images/${[playerChoice]}.jpg`;
    playerImage.alt = choices[playerChoice];

    let computerChoice = Math.floor(Math.random() * 4);

    computerImage.src = `assets/images/${[computerChoice]}.jpg`;
    computerImage.alt = choices[computerChoice];

    let result = checkWinner(choices[computerChoice], choices[playerChoice]);

    updateScores(result);
}

/**
 * Check answer function checkAnswer
 */
function checkAnswer {
    
}

/** 
 * display player choice
 */
function displayPlayerChoice("player-image") {
    if (playerChoice) {
        displayPlayerChoice();
    }
}

/**
 * display computer choice
 */

 function displayComputerChoice("computer-image") {
    if (computerChoice) {
        displayComputerChoice();
    } 
 }
 
 /**
 * Add the wins for player and computer incrementScore
 */
function incrementScore {
    
}