const choices = ["rock", "paper", "scissors"];

function getComputerChoice() {
	return choices[Math.floor(Math.random() * 3)]
}

function getPlayerChoice() {
	let playerChoice = prompt("1.Rock 2.Paper 3.Scissors\n" +
		"Enter a number that corresponds with your choice:");
	return choices[playerChoice - 1];
}
