// Init Empty Score & Choice Input Values 
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";

// Generate Computer Selection Based on Random Index Value 
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    console.log(`Computer picked ${choices[randomIndex]}!`)
    return choices[randomIndex];
}

// Prompt User for Choice 
function getHumanChoice() {
    let choice = prompt("Rock, Paper or Scissors?").toLowerCase();
    if (choice == "rock") {
        console.log("You picked rock!")
        return "rock";
    }
    else if (choice == "paper") {
        console.log("You picked paper!")
        return "paper";
    }
    else {
        console.log("You picked scissors!")
        return "scissors";
    }
}

// Print Winner and Final Score to Console Log 
function displayFinalScore() {
    if (humanScore > computerScore) {
        console.log(`You won the game ${humanScore} - ${computerScore}!`);
    } else if (computerScore > humanScore) {
        console.log(`You lost the game ${computerScore} - ${humanScore}!`);
    } else {
        console.log(`The game is a tie! ${humanScore} - ${computerScore}`);
    }
}


// Run One Round, Add Results to Score and Print Results to Console Log 
function playRound(humanChoice, computerChoice) {

    const victoryMap = {
        rock: {
            rock: { result: 'tie', action: () => { console.log("It's a tie!"); }},
            paper: { result: 'lose', action: () => { console.log("You lose!"); computerScore += 1}},
            scissors: { result: 'win', action: () => { console.log("You win!"); humanScore += 1; }}
        },
        paper: {
            rock: { result: 'win', action: () => { console.log("You win!"); humanScore += 1; }},
            paper: { result: 'tie', action: () => { console.log("It's a tie!") }},
            scissors: { result: 'lose', action: () => { console.log("You lose!"); computerScore += 1}}
        },
        scissors: {
            rock: { result: 'lose', action: () => { console.log("You lose!"); computerScore += 1}},
            paper: { result: 'win', action: () => { console.log("You win!"); humanScore += 1; }},
            scissors: { result: 'tie', action: () => { console.log("It's a tie!") }}
        }
    }

    const result = victoryMap[humanChoice][computerChoice];

    if (result) {
        result.action();
    }

    console.log(`Human Score: ${humanScore}, Computer Score: ${computerScore}`);
}

// Run 5 Rounds and Report Results to Console Log 
function playGame(humanChoice, computerChoice) {

    for (let i = 0; i < 5; i++) {
        humanChoice = getHumanChoice(); 
        computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    
    displayFinalScore();
}

// Init Game 
playGame(humanChoice, computerChoice);


