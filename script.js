//get player selection
// const playerSelection = querrySelector('button');


//create a function that randomly returns the string "rock", "paper", or "scissors"
function computerPlay() {
    let random = Math.floor(Math.random() * 3);
    if (random === 0) {
        return "rock";
    } else if (random === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

//create a function that plays a single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    } else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beats paper.";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors.";
    } else if (playerSelection === "scissors" && computerSelection === "paper") {
        return "You win! Scissors beats paper.";
    }
}

//create a function that plays a 5 round game of rock paper scissors
function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Rock, paper, or scissors?");
        playerSelection = playerSelection.toLowerCase();
        let computerSelection = computerPlay();
        let result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.includes("win")) {
            playerScore++;
        } else if (result.includes("lose")) {
            computerScore++;
        }
    }
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("It's a tie!");
    }
}



game();
