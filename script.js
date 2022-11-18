let playerScore = 0;
let computerScore = 0;
const score = document.querySelector('#score');
const results = document.querySelector('#results');
const buttons = document.querySelectorAll('button');
const resetButton = document.querySelector('#reset');

buttons.forEach((button) => {
    button.addEventListener('click', playRound)
});

resetButton.removeEventListener('click', playRound);
resetButton.addEventListener('click', resetScores);

function resetScores() {
    playerScore = 0;
    computerScore = 0;
    score.textContent = "0 - 0";
    results.textContent = "Choose Rock, Paper, or Scissors.";

    buttons.forEach((button) => {
        button.addEventListener('click', playRound)
    });

    resetButton.removeEventListener('click', playRound);
    resetButton.addEventListener('click', resetScores);
}

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3) + 1;
    if (choice === 1) {
        return "Rock";
    } else if (choice === 2) {
        return "Paper";
    } else if (choice === 3) {
        return "Scissors";
    }
}

function playRound(event) {
    playerSelection = event.explicitOriginalTarget.id;
    computerSelection = getComputerChoice();
    // win conditions
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerScore++;
        results.textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    }
    else if ((computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection === "Paper" && playerSelection === "Rock") ||
        (computerSelection === "Scissors" && playerSelection === "Paper")) {
        computerScore++;
        results.textContent = `You lose! ${playerSelection} loses to ${computerSelection}!`
    } else {
        results.textContent = "Tie game!"
    }
    score.textContent = `${playerScore} - ${computerScore}`

    if (playerScore === 5 || computerScore === 5) {
        if (playerScore === 5) {
            results.textContent = "Game over! You win!"
        } else {
            results.textContent = "Game over! You lose!"
        }
        buttons.forEach((button) => {
            button.removeEventListener('click', playRound);
        });
    }
}
