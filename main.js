function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);
  switch (choice) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getHumanChoice() {
  return prompt("Select rock, paper or scissors: ").toLowerCase();
}

function playRound(humanChoice, computerChoice) {
  const matchup = `${humanChoice}-${computerChoice}`;

  switch (matchup) {
    // rock
    case "rock-paper":
      console.log(`You lose: ${computerChoice} beats ${humanChoice}.`);
      return "computer";
    case "rock-scissors":
      console.log(`You win: ${humanChoice} beats ${computerChoice}.`);
      return "human";
    // paper
    case "paper-rock":
      console.log(`You win: ${humanChoice} beats ${computerChoice}.`);
      return "human";
    case "paper-scissors":
      console.log(`You lose: ${computerChoice} beats ${humanChoice}.`);
      return "computer";
    // scissors
    case "scissors-rock":
      console.log(`You lose: ${computerChoice} beats ${humanChoice}.`);
      return "computer";
    case "scissors-paper":
      console.log(`You win: ${humanChoice} beats ${computerChoice}.`);
      return "human";
    // if we got here, that means it's a draw
    default:
      console.log(`Tie: ${humanChoice} vs ${computerChoice}.`);
      return "tie";
  }
}

function checkWinner(humanScore, computerScore) {
  if (humanScore > computerScore) {
    console.log(`You win! You got: ${humanScore}\nComputer:${computerScore}`);
  } else if (humanScore < computerScore) {
    console.log(`You lost! You got: ${humanScore}\nComputer:${computerScore}`);
  } else {
    console.log(
      `It's a tie! You got: ${humanScore}\nComputer:${computerScore}`,
    );
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  const updateScores = (roundWinner) => {
    switch (roundWinner) {
      case "human":
        humanScore++;
        break;
      case "computer":
        computerScore++;
        break;
      case "tie":
        break;
    }
  };

  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const winner = playRound(humanSelection, computerSelection);
    updateScores(winner);
  }
  checkWinner(humanScore, computerScore);
}

playGame();
