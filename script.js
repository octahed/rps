const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
	return choices[Math.floor(Math.random() * 3)]
}

function getPlayerChoice() {
	let playerChoice = prompt("1.Rock 2.Paper 3.Scissors\n" +
		"Enter a number that corresponds with your choice:");
	return choices[playerChoice - 1];
}

// Function that plays a round of the game
function playRound(playerSelection, computerSelection) {
	if (playerSelection === computerSelection) {
		console.log("It's a tie!");
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		console.log("You lose! Paper beats Rock");
		computerScore++;
	} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
		console.log("You win! Rock beats Scissors");
		playerScore++;
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		console.log("You win! Paper beats Rock");
		playerScore++;
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		console.log("You lose! Scissors beat Paper");
		computerScore++;
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		console.log("You lose! Rock beats Scissors");
		computerScore++;
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		console.log("You win! Scissors beat Paper");
		playerScore++;
	}
}

let playerScore = 0;
let computerScore = 0;

// function that checks the score and declares a winner
function declareWinner(playerScore, computerScore) {
	console.log(`The score is ${playerScore}:${computerScore}`);
	if (playerScore > computerScore) {
		console.log("The player wins!");
	} else if (computerScore > playerScore) {
		console.log("Computer wins!");
	} else {
		console.log("Tie!");
	}
}

function game() {
	for (let i = 0;i < 5;i++) {
		playRound(getPlayerChoice(), getComputerChoice());
	}

	declareWinner(playerScore, computerScore);
}
