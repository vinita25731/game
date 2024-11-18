// Selecting DOM elements
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const yourChoice = document.getElementById("your-choice");
const computerChoice = document.getElementById("computer-choice");
const outcome = document.getElementById("outcome");
const resetBtn = document.getElementById("reset-btn");

// Possible choices
const choices = ["rock", "paper", "scissors"];

// Function to get computer's random choice
function getComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function to determine the game result
function determineWinner(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  }

  if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper") ||
    (playerChoice === "paper" && computerChoice === "rock")
  ) {
    return "You win!";
  } else {
    return "You lose!";
  }
}

// Function to play the game
function playGame(playerChoice) {
  // Get computer's choice
  const computerChoiceValue = getComputerChoice();
  
  // Display the choices
  yourChoice.textContent = playerChoice.charAt(0).toUpperCase() + playerChoice.slice(1);
  computerChoice.textContent = computerChoiceValue.charAt(0).toUpperCase() + computerChoiceValue.slice(1);
  
  // Determine and display the outcome
  const result = determineWinner(playerChoice, computerChoiceValue);
  outcome.textContent = result;
}

// Event listeners for user input
rockBtn.addEventListener("click", () => playGame("rock"));
paperBtn.addEventListener("click", () => playGame("paper"));
scissorsBtn.addEventListener("click", () => playGame("scissors"));

// Reset the game
resetBtn.addEventListener("click", () => {
  yourChoice.textContent = "-";
  computerChoice.textContent = "-";
  outcome.textContent = "";
});
