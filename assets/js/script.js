
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

///**the computer choose function */
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

/**
 * The main rules for the game */

function game(userChoice) {   
    const computerChoice = getComputerChoice();
    if (userChoice === computerChoice) {
        draw(userChoice, computerChoice);
        } else if(userChoice === "ro", computerChoice === "sc" || computerChoice === "li") {
            win(userChoice, computerChoice);
        } else if(userChoice === "ro", computerChoice === "sp" || computerChoice === "pa") {
            lose(userChoice, computerChoice);

        } else if(userChoice === "pa", computerChoice === "sp" || computerChoice === "ro") {
            win(userChoice, computerChoice);
        } else if(userChoice === "pa", computerChoice === "li" || computerChoice === "sc") {
            lose(userChoice, computerChoice);
        
        } else if (userChoice === "sc", computerChoice === "pa" || computerChoice === "li") {
            win(userChoice, computerChoice);
        } else if (userChoice === "sc", computerChoice === "ro" || computerChoice === "sp") {
            lose(userChoice, computerChoice);

        } else if (userChoice === "li" && computerChoice === "pa" || computerChoice === "sp") {
            win(userChoice, computerChoice);
        } else if (userChoice === "li" && computerChoice === "ro" || computerChoice === "sc") {
            lose(userChoice, computerChoice);

        } else if (userChoice === "sp" && computerChoice === "sc" || computerChoice === "ro") {
            win(userChoice, computerChoice);
        } else if (userChoice === "sp" && computerChoice === "pa" || computerChoice === "li") {
            lose(userChoice, computerChoice);
    }  else {
        console.log("fail");
    }
} 

//** the game function*/
function main () {

    // event listener/
    rock_button.addEventListener("click", function() {
        game("ro");
    })

    paper_button.addEventListener("click", function() {
        game("pa");
    })

    scissors_button.addEventListener("click", function() {
        game("sc");
    })

    lizard_button.addEventListener("click", function() {
        game("li");
    })

    spock_button.addEventListener("click", function() {
        game("sp");
    })
}

main();