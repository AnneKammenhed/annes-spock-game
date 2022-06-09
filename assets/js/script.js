
/** Constants for DOM elements
and choices
*/

const buttons = document.getElementsByTagName("button");
const playerImage = document.getElementsByClassId("player-image");
const computerImage = document.getElementsByClassId("computer-image");
const playerScore = document.getElementsById("my-score");
const computerScore = document.getElementById("computer-score");
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
 * 
 */
function checkAnswer (playerChoise, computerChoice) {

    if(playerChoice === computerChoice) {
        result = null;
        alert("It's a draw!");
        
    } else if (playerChoice === "rock" && computerChoice === "scissors", "lizard") {
        result = playerChoice;
        return `You win`; 
    } else if (playerChoice === "paper" && computerChoice === "rock", "spock") {
        result = playerChoice;
        return `You win`;
    } else if (playerChoice === "scissors" && computerChoice === "lizard", "paper") {
        result = playerChoice;
        return `You win`;
    } else if (playerChoice === "lizard" && computerChoice === "paper", "spock") {
        result = playerChoice;
        return `You win`;
    } else (playerChoice === "spock" && computerChoice === "scissors", "rock"); {
        result = playerChoice;
        return `You win`;
    }
}

/**
 * add you win / you loose message - alert? null = draw compoterChoice= you lose player choice - you win
 */


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

function incrementPlayerScore() {
    let oldScore = parseInt(document.getElementById("my-score").innerText);
    document.getElementById("my-score").innerText = ++oldScore;
}

function incrementComputerScore() {
    let oldScore = parseInt(document.getElementById("computer-score").innerText);
    document.getElementById("computer-score").innerText = ++oldScore;
}