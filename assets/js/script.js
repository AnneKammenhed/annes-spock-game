
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
                alert("Let's play Annes Spock Game!");
            } 
        })
    }
})

/**
 * The main game function to run the game
*/
function runGame() {
    //choose random computer choice
    let computerChoice = Math.floor(Math.random() * 4)
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


/**
 * display computer choice
 */
