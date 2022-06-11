
/** Constants */
const rock_button = document.getElementById("ro");
const paper_button = document.getElementById("pa");
const scissors_button = document.getElementById("sc");
const lizard_button = document.getElementById("li");
const spock_button = document.getElementById("sp");

const choiceArea_h2 = document.querySelector(".choice-area > h2");

const scoreArea_div = document.getElementsByClassName("score-area");
const playerScore_span = document.getElementById("player-score");
const computerScore_span = document.getElementById("computer-score");

/**scores */
let userScore = 0;
let computerScore = 0;

///**the computer choose function */
function getComputerChoice() {
    const choices = ["ro", "pa", "sc", "li", "sp"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

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