
/** Constants for DOM elements and choices
*/


/**
 * Event listeners for the buttons to call the main game
 */
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("Button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type")) {
                runGame(gameType);
            } 
        })
    }

    runGame("submit");
})

/**
 * The main game function to run the game
*/
function runGame(gameType) {

    //choose random computer choice
    let computerChoice = Math.floor(Math.random() * 4);

    if (gameType === "submit") {
        displaySubmitQuestion(computerChoice);
        displaySubmitQuestion(playerChoice);
    }
} 

/**
 * Check wich answer is true checkAnswer function
*/

/**
 * Add the wins for player and computer incrementScore for spans "my-score" and "computer-score"
 */


/** 
 * display player choice
 */

function displayPlayerChoice(){
    document.getElementById("player-choice").src = `assets/images/${[playerChoice]}.jpg`;
}

/**
 * display computer choice
 */

 function displayComputerChoice(){
    document.getElementById("computer-choice").src = `assets/images/${[computerChoice]}.jpg`;
}