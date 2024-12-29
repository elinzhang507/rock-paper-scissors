let humanScore = 0;
let computerScore = 0;
let alreadyFive = false;

playGame();

function playGame(){
        // const humanChoice = getHumanChoice();
        // const computerChoice = getComputerChoice();
        // playRound(humanChoice, computerChoice);
    
    const rockBtn = document.querySelector("#rock");
    const paperBtn = document.querySelector("#paper");
    const scissorsBtn = document.querySelector("#scissors");
    
    rockBtn.addEventListener("click", () => playRound(rockBtn.textContent.toLowerCase(), getComputerChoice()));
    paperBtn.addEventListener("click", () => playRound(paperBtn.textContent.toLowerCase(), getComputerChoice()));
    scissorsBtn.addEventListener("click", () => playRound(scissorsBtn.textContent.toLowerCase(), getComputerChoice()));
    
}

function playRound(humanChoice, computerChoice){
    let comment = document.querySelector(".comment-container");
    if(humanChoice === "rock" && computerChoice === "scissors") {
        comment.textContent = ("You win! Rock beats Scissors!");
        humanScore++;
    } else if (humanChoice === "rock" && computerChoice === "paper") {
        comment.textContent = ("You Lose! Paper beats Rock!");
        computerScore++;
    } else if (humanChoice === "paper" && computerChoice === "rock") {
        comment.textContent = ("You win! Paper beats Rock!");
        humanScore++;
    } else if (humanChoice === "paper" && computerChoice === "scissors") {
        comment.textContent = ("You Lose! Scissors beats Paper!");
        computerScore++;
    } else if (humanChoice === "scissors" && computerChoice === "paper") {
        comment.textContent = ("You win! Scissors beats Paper!");
        humanScore++;
    } else if (humanChoice === "scissors" && computerChoice === "rock") {
        comment.textContent = ("You Lose! Rock beats Scissors");
        computerScore++;
    } else {
        comment.textContent = ("It's a tie! You both chose " + humanChoice + "!");
    }

    let score = document.querySelector(".score-container");
    score.textContent = "Score is: " + humanScore + "-" + computerScore;

    if((humanScore == 5 || computerScore == 5) && alreadyFive == false) {
        let final = document.querySelector(".final-container");
        alreadyFive == true;
        humanScore == 5 ? final.textContent = "You reached 5 wins first!" : "Computer reached 5 wins first!";
    }

    if(humanScore > computerScore){
        console.log("You win " + humanScore + "-" + computerScore + "!");
    } else if (humanScore < computerScore){
        console.log("You Lose " + humanScore + "-" + computerScore + "!");
    } else {
        console.log("It's a tie! " + humanScore + "-" + computerScore);
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
    // let choice = prompt("Enter rock, paper, or scissors");
    // choice = choice.toLowerCase();
    // while(choice !== "rock" && choice !== "scissors" && choice !== "paper"){
    //     choice = prompt("Invalid choice! Enter rock, paper, or scissors");
    //     choice = choice.toLowerCase();
    // }
    // return choice;


}
