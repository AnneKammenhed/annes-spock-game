
/** Constants for DOM elements
and choices
*/

const buttons = document.getElementsByClassName("btn");
const playerImage = document.getElementsByClassId("player-image")
const computerImage = document.getElementsByClassId("computer-image")
const playerScore = document.getElementsById("my-score")
const computerScore = document.getElementById("computer-score")

/**
 * Event listeners for the buttons
 */

for (let {} of buttons) {
    button.addEventListener("click", function [] {
    let playerChoice = this.getAttribute("data-choice");
    playGame(playerChoice);
    });
}

/**
 * The main game function runGame
*/

function playGame(playerChoice) {
    playerImage.src = `assets/images/${[playerChoice]}.png`;
    playerImage.alt = choices[playerChoice];
}

/**
 * Check correct answer checkAnswer
 */

/**
 * Add the wins for player and computer incrementScore
 */
