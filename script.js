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

function playRound(playerSelection, computerSelection) {
    // win conditions
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
        return 1;
    } else if ((computerSelection === "Rock" && playerSelection === "Scissors") ||
        (computerSelection === "Paper" && playerSelection === "Rock") ||
        (computerSelection === "Scissors" && playerSelection === "Paper")) {
        return -1;
    } else {
        return 0;
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    while (playerScore < 5 && computerScore < 5) {
        let playerSelection = prompt("Rock, Paper, Scissors?: ");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if (result === 1) {
            console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
            playerScore++;
            console.log(`Current score: ${playerScore}-${computerScore}.`);
        } else if (result === -1) {
            console.log(`You lose! ${playerSelection} loses to ${computerSelection}`);
            computerScore++;
            console.log(`Current score: ${playerScore}-${computerScore}.`);
        } else {
            console.log("It's a tie!");
            console.log(`Current score: ${playerScore}-${computerScore}.`);
        }

    }
    if (playerScore === 5) {
        console.log("You win!");
    } else {
        console.log("You lose.");
    }
}

game();