
function whoWins(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "Tie!";
    } else if(
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!";
    } else {
        return "You lose!";
    }
}

const results = document.getElementById('results');
const announcement = document.getElementById('anouncement');
const reset = document.getElementById('reset-btn');
const gameOver = "Reset"
reset.textContent = gameOver

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}



let totalWins = 0;
let totalRounds = 0;

function handlePlayerChoice(event) {
    if (totalRounds >= 5) {
        announcement.textContent = `You won ${totalWins} out of ${totalRounds} games!`;
        announcement.textContent += totalRounds ===5 && totalWins > 2 ? 'You won the game!' : 'Game over! You Lost!';
        // resetGame()
        return;
    }
    
    // Get player and computer choices)
    const playerChoice = event.target.textContent.toLowerCase();
    const computerChoice = getComputerChoice();
    const roundResult = whoWins(playerChoice, computerChoice);
    
    totalRounds++;
    if (roundResult === 'You win!') {
        totalWins++;
    }  
    // // Display results efficiently
    results.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${roundResult}`;
    announcement.textContent = `You won ${totalWins} out of ${totalRounds} games!`;
    // announcement.textContent
}
// resetGame()

// Add click events (cache elements for efficiency)
const options = document.querySelectorAll('.option');
options.forEach(option => option.addEventListener('click', handlePlayerChoice));

// document.getElementById('reset-btn').addEventListener('click', resetGame);
reset.addEventListener('click',resetGame)

function resetGame() {
    totalWins = 0;
    totalRounds = 0;
    results.textContent = '';
    announcement.textContent = '';
    // reset.style.visibility = "visible";
}
















































































