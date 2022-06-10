
/** Constants for DOM elements and choices
*/
const buttons = document.getElementsByTagName("button");

const playerImage = document.getElementsByClassId("player-image");
const playerScore = document.getElementsById("my-score");

const computerImage = document.getElementsByClassId("computer-image");
const computerScore = document.getElementById("computer-score");

const choices = ("rock", "paper", "scissors", "lizard", "spock");

/**
 * Start playing game with the buttons - call the main game
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
function runGame(_gameType) {

    playerImage.src = `assets/images/${[playerChoice]}.jpg`;

    //choose random computer choice
    let computerChoice = Math.floor(Math.random() * 4);

    computerImage.src = `assets/images/${[computerChoice]}.jpg`;

    let result = checkAnswer(choices[playerChoice], choices[computerChoice]);

    updateScores(result);
} 

/**
 * Check wich answer is true checkAnswer function
*/

function checkAnswer (_playerChoise, computerChoice) {

    if(playerChoice === computerChoice) {
        result.textContent = "It's a draw!";
        
    } else if (playerChoice === "rock" && computerChoice === "scissors", "lizard") {
        result.textContent = "You win!";
        playerScore++;
        playerScore.textContent = playerScore; 
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
 * Add the wins for player and computer incrementScore for spans "my-score" and "computer-score"
 */
function incrementPlayerScore () {

}

function incrementComputerScore () {

}

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