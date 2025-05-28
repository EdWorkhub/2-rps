// Init Empty Score & Choice Input Values 
let randomValue = Math.floor(Math.random() * 4);
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";

// Helper Function: Set Random int from 1-3 for computerScore()
function getRandomValue() {
    randomValue = Math.floor(Math.random() * 4);
    return randomValue;
}

// Generate Computer Selection Based on randomValue 
function getComputerChoice(randomValue) {
    if (randomValue <= 1) {
        console.log("Computer has chosen rock!");
        return "rock";
    } else if (randomValue > 1 && randomValue <= 2) {
        console.log("Computer has chosen paper!");
        return "paper";
    } else {
        console.log("Computer has chosen scissors!");
        return "scissors";
    }
}

// Prompt User for Choice 
function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (choice == "rock") {
        return "rock";
    }
    if (choice == "paper") {
        return "paper";
    }
    if (choice == "scissors") {
        return "scissors";
    }
}

// Run One Round, Add Results to Score and Print Results to Console Log 
function playRound(humanChoice, computerChoice) {

    if (humanChoice == "rock") {
        if (computerChoice == "rock") {
            console.log("It's a tie!");
        } else if (computerChoice == "scissors") {
            console.log ("You win! Rock beats Scissors.");
            humanScore += 1;
        } else {
            console.log("You lose. Paper beats Rock.");
            computerScore += 1;
        }

    } else if (humanChoice == "paper") {
        if (computerChoice == "rock") {
            console.log("You win! Paper beats Rock.");
            humanScore += 1;
        } else if (computerChoice == "scissors") {
            console.log ("You lose! Scissors beats Paper.");
            computerScore += 1;
        } else {
            console.log("It's a tie!");
        }

    } else {
        if (computerChoice == "rock") {
            console.log("You lose! Rock beats Scissors.");
            computerScore += 1;
        } else if (computerChoice == "scissors") {
            console.log ("It's a tie!");
        } else {
            console.log("You win! Scissors beats Paper.");
            humanScore += 1;
        }
    }

    console.log("Human Score: " + humanScore + " " + "Computer Score: " + computerScore);
}

// Run 5 Rounds and Report Results to Console Log 
function playGame(humanChoice, computerChoice) {
    for (i = 0; i < 4; i++) {
        playRound(humanChoice, computerChoice);
        humanChoice = getHumanChoice(); 
        randomValue = getRandomValue();
        computerChoice = getComputerChoice(randomValue);
    }
    playRound(humanChoice, computerChoice);
    displayFinalScore();
}

// Print Winner and Final Score to Console Log 
function displayFinalScore() {
    if (humanScore > computerScore) {
        console.log("You won the game " + humanScore + " - " + computerScore + "!");
    } else if (computerScore > humanScore) {
        console.log("You lost the game " + computerScore + " - " + humanScore + "!");
    } else {
        console.log("It's a tie " + computerScore + " - " + humanScore + "!");
    }
}

// Init Game 
humanChoice = getHumanChoice();
computerChoice = getComputerChoice(randomValue);
playGame(humanChoice, computerChoice);


