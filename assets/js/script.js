
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

/** let for scores*/
let userScore = 0;
let computerScore = 0;

//** the event listeners to play the game*/
function main () {

    rock_button.addEventListener("click", function() {
        game("ro");
    });

    paper_button.addEventListener("click", function() {
        game("pa");
    });

    scissors_button.addEventListener("click", function() {
        game("sc");
    });

    lizard_button.addEventListener("click", function() {
        game("li");
    });

    spock_button.addEventListener("click", function() {
        game("sp");
    });
}

main();

///**the computer choose function random choice between five options*/
function getComputerChoice() {
    const choices = ["ro", "pa", "sc", "li", "sp"];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

//**function to get understandable words on page */
function convertToWord(letter) {
    if(letter === "ro") return "Rock";
    if(letter === "pa") return "Paper";
    if(letter === "sc") return "Scissors";
    if(letter === "li") return "Lizard";
    if(letter === "sp") return "Spock";
}

/**
 * The main rules for the game */

 function game(userChoice) {   
    const computerChoice = getComputerChoice();
    switch (userChoice + computerChoice) {
        case "rosc":
        case "roli":
        case "pasp":
        case "paro":
        case "scli":
        case "scpa":
        case "lipa":
        case "lisp":
        case "spsc":    
        case "spro":   
            win(userChoice, computerChoice);
            break;
        case "ropa":
        case "rosp":
        case "pasc":
        case "pali":
        case "scro":
        case "scsp":
        case "liro":
        case "lisc":
        case "sppa":    
        case "spli": 
            lose(userChoice, computerChoice);
            break;
        case "roro":
        case "papa":
        case "scsc":
        case "lili":    
        case "spsp":
            draw(userChoice, computerChoice);
            break; 
    }
}

//**add scores to the page and add scentence about what has been played */
function win(userChoice, computerChoice) {
    userScore++;
    playerScore_span.innerHTML = userScore;
    choiceArea_h2.innerHTML = convertToWord(userChoice) + " beats " + convertToWord(computerChoice) + ". You win!";
}

function lose(userChoice, computerChoice) {
    computerScore++;
    computerScore_span.innerHTML = computerScore;
    choiceArea_h2.innerHTML = convertToWord(userChoice) + " looses against " + convertToWord(computerChoice) + ". You lost!";
}

function draw(userChoice, computerChoice) {
   choiceArea_h2.innerHTML = convertToWord(userChoice) + " is the same as " + convertToWord(computerChoice) + ". It's a draw!";
}