console.log("Hello, World!");

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
const n = 3;
function getComputerChoice() {
  const randomInt = getRandomInt(n);
  if (randomInt == 0) {
    return "rock";
  } else if (randomInt == 1) {
    return "paper";
  } else if (randomInt == 2) {
    return "scissors";
  } else {
    return "None";
  }
}

// function getHumanChoice() {
//   const input = prompt("Select one:\n(r)rock\n(p)paper\n(s)scissors ");
//   if (input.toLowerCase() == "r" || input.toLowerCase() == "rock") {
//     return "rock";
//   } else if (input.toLowerCase() == "p" || input.toLowerCase() == "paper") {
//     return "paper";
//   } else if (input.toLowerCase() == "s" || input.toLowerCase() == "scissors") {
//     return "scissors";
//   }
// }

console.log(getComputerChoice());
// console.log(getHumanChoice());
