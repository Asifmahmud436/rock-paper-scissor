// alert("The project is initiated!");
function  getHumanChoice(){
    let str1 = prompt("3,2,1....! : ");
    return str1.toLowerCase();
}

function getComputerChoice(){
    choices = ['rock','paper','scissors'];
    return  choices[Math.floor(Math.random()*3)];
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection,computerSelection){
    // humanSelection = humanSelection.toLowerCase();
    if(humanSelection === 'rock'){
        if(computerSelection === 'paper'){
            console.log(`You lose! ${computerSelection} beats ${humanSelection}`)
            computerScore++;
        }
        else if(computerSelection === 'scissors'){
            console.log(`You Win! ${humanSelection} beats ${computerSelection}`)
            humanScore++;
        }
        else{
            console.log(`Its a DRAW!`);
        }
    }
    else if(humanSelection === 'paper'){
        if(computerSelection === 'scissor'){
            console.log(`You lose! ${computerSelection} beats ${humanSelection}`)
            computerScore++;
        }
        else if(computerSelection === 'rock'){
            console.log(`You Win! ${humanSelection} beats ${computerSelection}`)
            humanScore++;
        }
        else{
            console.log(`Its a DRAW!`);
        }
    }
    else{
        if(computerSelection === 'rock'){
            console.log(`You lose! ${computerSelection} beats ${humanSelection}`)
            computerScore++;
        }
        else if(computerSelection === 'paper'){
            console.log(`You Win! ${humanSelection} beats ${computerSelection}`)
            humanScore++;
        }
        else{
            console.log(`Its a DRAW!`);
        }
    }
}

function playGame(){
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(humanScore,computerScore);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(humanScore,computerScore);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(humanScore,computerScore);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(humanScore,computerScore);
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
    console.log(humanScore,computerScore);

    if(humanScore>computerScore){
        alert("You defeated the easiest bot made by me ! Well Played,Noob ! ")
    }
    else if(humanScore<computerScore){
        alert("You lost to the most easieast bot ??? Hell nawwwwwwh...")
    }
    else{
        alert("You didnt win or lose . But you sure wastes your time!")
    }
}

playGame();