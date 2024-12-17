
let humanScore = 0;
let computerScore = 0;

playGame();

function playGame(){
    for(let i = 0; i < 5; i++){
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        playRound(humanChoice, computerChoice);
    }
    if(humanScore > computerScore){
        console.log("You win " + humanScore + "-" + computerScore + "!");
    } else if (humanScore < computerScore){
        console.log("You Lose " + humanScore + "-" + computerScore + "!");
    } else {
        console.log("It's a tie! " + humanScore + "-" + computerScore);
    }
}

function playRound(humanChoice, computerChoice){
    if(humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You win! Rock beats Scissors!");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You Lose! Paper beats Rock!");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You win! Paper beats Rock!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You Lose! Scissors beats Paper!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You win! Scissors beats Paper!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You Lose! Rock beats Scissors");
        computerScore++;
    } else {
        console.log("It's a tie! You both chose " + humanChoice + "!");
    }
}

function getComputerChoice(){
    choice = Math.floor(Math.random() * 3);
    if(choice == 0){
        return "rock";
    } else if (choice == 1){
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice(){
    let choice = prompt("Enter rock, paper, or scissors");
    choice = choice.toLowerCase();
    while(choice !== "rock" && choice !== "scissors" && choice !== "paper"){
        choice = prompt("Invalid choice! Enter rock, paper, or scissors");
        choice = choice.toLowerCase();
    }
    return choice;
}