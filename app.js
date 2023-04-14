function getComputerChoice() {
  let randomNum = Math.random();
  if (randomNum > 0 && randomNum < 0.33) {
    return "rock";
  } else if (randomNum >= 0.33 && randomNum < 0.66) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  computerSelection = getComputerChoice();

  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Win! Paper beats Rock";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "You Win! Scissors beats Paper";
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "You Win! Rock beats Scissors";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "You Lose! Scissors beats Paper";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "You Lose! Rock beats Scissors";
  } else {
    return "It's a Draw!";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 1; i <= 5; i++) {
    const playerSelection = prompt("Enter your choice (rock/paper/scissors):");
    const result = playRound(playerSelection, getComputerChoice());
    console.log(`Round ${i}: ${result}`);

    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }
  }

  if (playerScore > computerScore) {
    console.log(
      `Congratulations! You win the game ${playerScore}-${computerScore}.`
    );
  } else if (playerScore < computerScore) {
    console.log(`Sorry, you lost the game ${playerScore}-${computerScore}.`);
  } else {
    console.log(`It's a tie game ${playerScore}-${computerScore}.`);
  }
}
