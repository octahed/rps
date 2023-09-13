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
		return "It's a tie!";
	} else if (playerSelection === 'rock' && computerSelection === 'paper') {
		return "You lose! Paper beats Rock";
	} else if (playerSelection === 'rock' && computerSelection === 'scissors') {
		return "You win! Rock beats Scissors";
	} else if (playerSelection === 'paper' && computerSelection === 'rock') {
		return "You win! Paper beats Rock";
	} else if (playerSelection === 'paper' && computerSelection === 'scissors') {
		return "You lose! Scissors beat Paper";
	} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
		return "You lose! Rock beats Scissors";
	} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
		return "You win! Scissors beat Paper";
	}
}
