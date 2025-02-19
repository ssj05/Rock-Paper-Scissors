console.log("Game Start!!");

const rock = "rock";
const paper = "paper";
const scissors = "scissors";
const n = 3;
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

let humanSelection = "";

const body = document.querySelector("body");
const gameTitle = document.createElement("h3");
gameTitle.textContent = "Rock Paper Scissors";
gameTitle.style.margin = "10px";
body.appendChild(gameTitle);

const Rock = document.createElement("button");
Rock.id = "rock";
const Paper = document.createElement("button");
Paper.id = "paper";
const Scissors = document.createElement("button");
Scissors.id = "scissors";

Rock.textContent = "Rock";
Paper.textContent = "Paper";
Scissors.textContent = "Scissors";

const run = document.createElement("button");
run.id = "play";
run.textContent = "play";
run.style.margin = "10px 10em";

const score = document.createElement("div");
score.id = "score";

const result = document.createElement("div");
result.id = "result";

body.appendChild(Rock);
body.appendChild(Paper);
body.appendChild(Scissors);
body.appendChild(run);
body.appendChild(score);
body.appendChild(result);

body.addEventListener("click", (e) => {
  let target = e.target;
  switch (target.id) {
    case "rock":
      humanSelection = "rock";
      break;
    case "paper":
      humanSelection = "paper";
      break;
    case "scissors":
      humanSelection = "scissors";
      break;
    case "play":
      playGame();
      break;

    default:
      break;
  }
});

let computerScore = 0;
let humanScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice == computerChoice) {
    score.textContent = "Tie!";
  } else if (
    (humanChoice == rock && computerChoice == paper) ||
    (humanChoice == paper && computerChoice == scissors) ||
    (humanChoice == scissors && computerChoice == rock)
  ) {
    score.textContent = `You lose! ${computerChoice} beats ${humanChoice}`;
    computerScore++;
  } else if (
    (humanChoice == rock && computerChoice == scissors) ||
    (humanChoice == paper && computerChoice == rock) ||
    (humanChoice == scissors && computerChoice == paper)
  ) {
    score.textContent = `You win! ${humanChoice} beats ${computerChoice}`;
    humanScore++;
  }
  result.textContent = `humanScore: ${humanScore}\ncomputerScore: ${computerScore}`;
}

function playGame() {
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
  if (computerScore == 5 && computerScore > humanScore) {
    result.textContent = "you lose the game!";
    return 1;
  } else if (humanScore == 5 && humanScore > computerScore) {
    result.textContent = "you won the game!";
    return 2;
  }
}
