var choices = ["rock", "paper", "scissors"];
let message;
let result;

const tie = "You tied!"
const win = "You win!"
const loss = "You lose!" 

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    
    getComputerChoice();
    
    var computerSelection = getComputerChoice();
    var playerSelection = prompt("rock, paper, or scissors?")
    
    console.log("CPU: ", computerSelection);
    console.log("You: ", playerSelection);

    if (playerSelection ===  computerSelection) { 
        console.log(tie);
    }   else if (
            playerSelection === "rock" && computerSelection === "scissors" || 
            playerSelection === "scissors" && computerSelection === "paper" ||
            playerSelection === "paper" && computerSelection === "rock"){
                console.log(win);
    }   else if (
            playerSelection === null || playerSelection === "") {
                console.log("not a valid input, next round");
    }   else {
                console.log(loss);
    }
}

function game(){
    for (let i = 0; i < 5; i++){
    playRound();
}
}

game();