console.log("Hello, World!");

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const n = 3;
let humanScore = 0;
let computerScore = 0;

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}

function getComputerChoice() {
  const randomInt = getRandomInt(n);
  if (randomInt == 0) {
    return rock;
  } else if (randomInt == 1) {
    return paper;
  } else if (randomInt == 2) {
    return scissors;
  } else {
    return "None";
  }
}

function getHumanChoice() {
  const input = prompt("Select one:\n(r)rock\n(p)paper\n(s)scissors ");
  if (input.toLowerCase() == "r" || input.toLowerCase() == "rock") {
    return rock;
  } else if (input.toLowerCase() == "p" || input.toLowerCase() == "paper") {
    return paper;
  } else if (input.toLowerCase() == "s" || input.toLowerCase() == "scissors") {
    return scissors;
  }
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    console.log("Tie!");
  } else if (
    (humanChoice == rock && computerChoice == paper) ||
    (humanChoice == paper && computerChoice == scissors) ||
    (humanChoice == scissors && computerChoice == rock)
  ) {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  } else if (
    (humanChoice == rock && computerChoice == scissors) ||
    (humanChoice == paper && computerChoice == rock) ||
    (humanChoice == scissors && computerChoice == paper)
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);
playRound(humanSelection, computerSelection);
