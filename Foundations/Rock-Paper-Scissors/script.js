// console.log("hello Nikhil")
// --> the options for the player are three "Rock", "Paper", "Scissors"
// the rules of the game are each player gets a chance to cast their options which include one of the three options above
// there are conditions on who will win based on the symbol they have casted
// Rock beats paper
// Paper beats Rock
// scissors beat paper 
// rock beats scissors


// --> you will be playing against the computer which will choose randomly between the options of the game



// Start a new Git repo for your project.
// Create a blank HTML document with a script tag (Hint: it is best practice to link an external .js file). This game is going to be played completely from the console, so don’t worry about putting anything else in there.
// Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!
// Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection - and then return a string that declares the winner or tie of the round like so: "You Lose! Paper beats Rock"

// Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).
// Important note: you want to return the results of this function call, not console.log() them. You’re going to use what you return later on, so let’s test this function by using console.log to see the results:

// function playRound(playerSelection, computerSelection) {
//   // your code here!
// }

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
// Write a NEW function called playGame(). Use the previous function inside of this one to play a five round game that keeps score and reports a winner or loser at the end.
// You have not officially learned how to “loop” over code to repeat function calls… if you already know about loops from somewhere else (or if you feel like doing some more learning) feel free to use them. If not, don’t worry! Just call your playRound function 5 times in a row. Loops are covered in the next lesson.
// At this point you should be using console.log() to display the results of each round and the winner at the end.
// Use prompt() to get input from the user. Read the docs here if you need to.
// Feel free to re-work your previous functions if you need to. Specifically, you might want to change the return value to something more useful.
// Feel free to create more “helper” functions if you think it would be useful.



function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * choices.length);
    return choices[randomNumber];
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return "You lose! Scissors beats Paper";
        } else {
            return "You win! Paper beats Rock";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            return "You lose! Rock beats Scissors";
        } else {
            return "You win! Scissors beats Paper";
        }
    } else {
        return "Invalid choice. Please choose Rock, Paper, or Scissors.";
    }
}

function playGame() {
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, Paper, or Scissors?");
        const computerSelection = getComputerChoice();
        const roundResult = playRound(playerSelection, computerSelection);
        console.log(roundResult);
        if (roundResult.includes("You win!")) {
            playerWins++;
        } else if (roundResult.includes("You lose!")) {
            computerWins++;
        }
    }
    if (playerWins > computerWins) {
        console.log("You win the game!");
    } else if (playerWins < computerWins) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}

playGame();




















