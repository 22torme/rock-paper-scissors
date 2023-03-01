//buttons
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const reset = document.querySelector('#reset-btn');

//score
//select the player score
const playerScore = document.querySelector('#player-score').querySelector("#p-score");
const computerScore = document.querySelector('#computer-score').querySelector('#c-score');

//results
const resultBox = document.querySelector('#result-box');
const playerSelection = document.querySelector('#player-selection');
const computerSelection = document.querySelector('#computer-selection');

//create a function that randomly returns the string "rock", "paper", or "scissors"
function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        computerSelection.textContent = "🪨";
        return "rock";
    } else if (random === 1) {
        computerSelection.textContent = "📄";
        return "paper";
    } else {
        computerSelection.textContent = "✂️";
        return "scissors";
    }
}

rock.addEventListener('click', () => {
    //adds rock icon to the player selection
    playerSelection.textContent = "🪨";
    playRound('rock', computerPlay());
});

paper.addEventListener('click', () => {
    //adds paper icon to the player selection
    playerSelection.textContent = "📄";
    playRound('paper', computerPlay());
});

scissors.addEventListener('click', () => {
    //adds scissors icon to the player selection
    playerSelection.textContent = "✂️";
    playRound('scissors', computerPlay());
});



//create a function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        resultBox.textContent = "=";
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        resultBox.textContent = "🎉";
        //update the score
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        resultBox.textContent = "😭";
        //update the score
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        resultBox.textContent = "🎉";
        //update the score
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        resultBox.textContent = "😭";
        //update the score
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        resultBox.textContent = "😭";
        //update the score
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        resultBox.textContent = "🎉";
        //update the score
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    }
}

//add event listener for reset button
reset.addEventListener('click', () => {
    //reset the score
    playerScore.textContent = 0;
    computerScore.textContent = 0;
    //reset the selections
    playerSelection.textContent = "";
    computerSelection.textContent = "";
    //reset the result box
    resultBox.textContent = "";
});