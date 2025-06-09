// Init Empty Score & Choice Input Values 
let humanScore = 0;
let computerScore = 0;
let humanChoice = "";
let computerChoice = "";

// Generate Computer Selection Based on Random Index Value 
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Run One Round, Add Results to Score and Print Results to Console Log 
function playRound(humanChoice) {

    // Get Computer Selection 
    const computerChoice = getComputerChoice();

    // Round Logic 
    const victoryMap = {
        rock: {
            rock: { result: 'tie', action: () => { text = "It's a tie!"; }},
            paper: { result: 'lose', action: () => { text = "You lose!"; computerScore += 1}},
            scissors: { result: 'win', action: () => { text = "You win!"; humanScore += 1; }}
        },
        paper: {
            rock: { result: 'win', action: () => { text = "You win!"; humanScore += 1; }},
            paper: { result: 'tie', action: () => { text = "It's a tie!"; }},
            scissors: { result: 'lose', action: () => { text = "You lose!"; computerScore += 1}}
        },
        scissors: {
            rock: { result: 'lose', action: () => { text = "You lose!"; computerScore += 1}},
            paper: { result: 'win', action: () => { text = "You win!"; humanScore += 1; }},
            scissors: { result: 'tie', action: () => { text = "It's a tie!"; }}
        }
    }

    // Round Result 
    const result = victoryMap[humanChoice][computerChoice];

    // Iterate Score (if relevant)
    if (result) {
        result.action();
    }
    
    // Print Round Results to page
    let humanChoiceText = document.querySelector(".results-human-choice");
    humanChoiceText.innerHTML = `You have picked ${humanChoice}!`;

    let computerChoiceText = document.querySelector(".results-computer-choice");
    computerChoiceText.innerHTML = `Computer has picked ${computerChoice}!`;

    let resultsText = document.querySelector(".results-text");
    resultsText.innerHTML = `${text} Human Score: ${humanScore} - Computer Score: ${computerScore}`


    document.getElementById("human-img").src = `./images/${humanChoice}.png`

    document.getElementById("human-img").style = ""

    document.getElementById("computer-img").src = `./images/${computerChoice}.png`

    document.getElementById("computer-img").style = ""

    // Print Game Results When Score Reaches 5 & Disable Buttons 
    if (humanScore === 5 || computerScore === 5) {
    displayFinalScore();

    document.querySelectorAll(".game-select").forEach(button => {
        button.disabled = true;
    });
    }
}

// Print Winner and Final Score to Console Log 
function displayFinalScore() {
    let roundResults = ""
    if (humanScore > computerScore) {
        console.log(`You won the game ${humanScore} - ${computerScore}!`);
        roundResults = `You won the game ${humanScore} - ${computerScore}!`;
    } else if (computerScore > humanScore) {
        console.log(`You lost the game ${computerScore} - ${humanScore}!`);
        roundResults = `You lost the game ${computerScore} - ${humanScore}!`
    } else {
        console.log(`The game is a tie! ${humanScore} - ${computerScore}`);
        roundResults = `The game is a tie! ${humanScore} - ${computerScore}`;
    }

    let element = document.querySelector(".results-game-text");
    element.innerHTML = roundResults;
}
