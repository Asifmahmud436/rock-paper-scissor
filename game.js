// button section
const container = document.querySelector('#container');

const btn1 = document.createElement('button');
btn1.classList.add('btn1');
btn1.innerText = "rock";
const btn2 = document.createElement('button');
btn2.classList.add('btn2');
btn2.innerText = "paper";
const btn3 = document.createElement('button');
btn3.classList.add('btn3');
btn3.innerText = "scissor";

container.appendChild(btn1);
container.appendChild(btn2);
container.appendChild(btn3);

// PARAGRAPH
const containerTwo = document.querySelector('#container-two');
const p = document.createElement('p');
p.innerText = 'Play Against AI';
containerTwo.appendChild(p);


// btn1.addEventListener("click", function (e) {
//     console.log("Working");
// });



// to get the human choice
// function  getHumanChoice(){
//     let str1 = prompt("3,2,1....! : ");
//     return str1.toLowerCase();
// }
// to get a random computer choice
function getComputerChoice(){
    choices = ['rock','paper','scissors'];
    return  choices[Math.floor(Math.random()*3)];
}

let humanScore = 0;
let computerScore = 0;
let rounds = 0;
// function playRound(){
//     // humanSelection = humanSelection.toLowerCase();
//     let humanSelection = btn1.innerText;
//     let computerSelection = getComputerChoice();
//     p.innerText = ``;
//     if(humanSelection === 'rock'){
//         if(computerSelection === 'paper'){
//             p.innerText = `You lose! ${computerSelection} beats ${humanSelection}`;
//             computerScore++;
//         }
//         else if(computerSelection === 'scissors'){
//             p.innerText = `You Win! ${humanSelection} beats ${computerSelection}`;
//             humanScore++;
//         }
//         else{
//             p.innerText = `Its a DRAW!`;
//         }
//     }
//     else if(humanSelection === 'paper'){
//         if(computerSelection === 'scissor'){
//             p.innerText = `You lose! ${computerSelection} beats ${humanSelection}`;
//             computerScore++;
//         }
//         else if(computerSelection === 'rock'){
//             p.innerText = `You Win! ${humanSelection} beats ${computerSelection}`;
//             humanScore++;
//         }
//         else{
//             p.innerText = `Its a DRAW!`;
//         }
//     }
//     else{
//         if(computerSelection === 'rock'){
//             p.innerText = `You lose! ${computerSelection} beats ${humanSelection}`;
//             computerScore++;
//         }
//         else if(computerSelection === 'paper'){
//             p.innerText = `You Win! ${humanSelection} beats ${computerSelection}`;
//             humanScore++;
//         }
//         else{
//             p.innerText = `Its a DRAW!`;
//         }
//     }
// }
btn1.addEventListener('click',function (){
    // humanSelection = humanSelection.toLowerCase();
    rounds++;
    let humanSelection = btn1.innerText;
    let computerSelection = getComputerChoice();
    p.innerText = ``;
    if(humanSelection === 'rock'){
        if(computerSelection === 'paper'){
            p.innerText = `You lose! ${computerSelection} beats ${humanSelection}.`;
            computerScore++;
        }
        else if(computerSelection === 'scissors'){
            p.innerText = `You Win! ${humanSelection} beats ${computerSelection}.`;
            humanScore++;
        }
        else{
            p.innerText = `Its a DRAW!`;
        }
    }
    else if(humanSelection === 'paper'){
        if(computerSelection === 'scissor'){
            p.innerText = `You lose! ${computerSelection} beats ${humanSelection}.`;
            computerScore++;
        }
        else if(computerSelection === 'rock'){
            p.innerText = `You Win! ${humanSelection} beats ${computerSelection}.`;
            humanScore++;
        }
        else{
            p.innerText = `Its a DRAW!`;
        }
    }
    else{
        if(computerSelection === 'rock'){
            p.innerText = `You lose! ${computerSelection} beats ${humanSelection}.`;
            computerScore++;
        }
        else if(computerSelection === 'paper'){
            p.innerText = `You Win! ${humanSelection} beats ${computerSelection}.`;
            humanScore++;
        }
        else{
            p.innerText = `Its a DRAW!`;
        }
    }
    if(rounds>0 && rounds%5==0){
        if(humanScore>computerScore){
            p.innerText += " 5 rounds over.You defeated the easiest bot made by me ! Well Played,Noob ! ";
        }
        else if(humanScore<computerScore){
            p.innerText +=  " 5 rounds over.You lost to the most easieast bot ??? Hell nawwwwwwh...";
        }
        else{
            p.innerText += " 5 rounds over.You didnt win or lose . But you sure wastes your time!";
        }       
    }
});

btn2.addEventListener('click',function (){
    // humanSelection = humanSelection.toLowerCase();
    rounds++;
    let humanSelection = btn2.innerText;
    let computerSelection = getComputerChoice();
    p.innerText = ``;
    if(humanSelection === 'rock'){
        if(computerSelection === 'paper'){
            p.innerText = `You lose! ${computerSelection} beats ${humanSelection}.`;
            computerScore++;
        }
        else if(computerSelection === 'scissors'){
            p.innerText = `You Win! ${humanSelection} beats ${computerSelection}.`;
            humanScore++;
        }
        else{
            p.innerText = `Its a DRAW!`;
        }
    }
    else if(humanSelection === 'paper'){
        if(computerSelection === 'scissor'){
            p.innerText = `You lose! ${computerSelection} beats ${humanSelection}.`;
            computerScore++;
        }
        else if(computerSelection === 'rock'){
            p.innerText = `You Win! ${humanSelection} beats ${computerSelection}.`;
            humanScore++;
        }
        else{
            p.innerText = `Its a DRAW!`;
        }
    }
    else{
        if(computerSelection === 'rock'){
            p.innerText = `You lose! ${computerSelection} beats ${humanSelection}.`;
            computerScore++;
        }
        else if(computerSelection === 'paper'){
            p.innerText = `You Win! ${humanSelection} beats ${computerSelection}.`;
            humanScore++;
        }
        else{
            p.innerText = `Its a DRAW!`;
        }
    }
    if(rounds>0 && rounds%5==0){
        if(humanScore>computerScore){
            p.innerText += " 5 rounds over.You defeated the easiest bot made by me ! Well Played,Noob ! ";
        }
        else if(humanScore<computerScore){
            p.innerText += " 5 rounds over.You lost to the most easieast bot ??? Hell nawwwwwwh...";
        }
        else{
            p.innerText += " 5 rounds over.You didnt win or lose . But you sure wastes your time!";
        }       
    }
});

btn3.addEventListener('click',function (){
    // humanSelection = humanSelection.toLowerCase();
    rounds++;
    let humanSelection = btn3.innerText;
    let computerSelection = getComputerChoice();
    p.innerText = ``;
    if(humanSelection === 'rock'){
        if(computerSelection === 'paper'){
            p.innerText = `You lose! ${computerSelection} beats ${humanSelection}.`;
            computerScore++;
        }
        else if(computerSelection === 'scissors'){
            p.innerText = `You Win! ${humanSelection} beats ${computerSelection}.`;
            humanScore++;
        }
        else{
            p.innerText = `Its a DRAW!`;
        }
    }
    else if(humanSelection === 'paper'){
        if(computerSelection === 'scissor'){
            p.innerText = `You lose! ${computerSelection} beats ${humanSelection}.`;
            computerScore++;
        }
        else if(computerSelection === 'rock'){
            p.innerText = `You Win! ${humanSelection} beats ${computerSelection}.`;
            humanScore++;
        }
        else{
            p.innerText = `Its a DRAW!`;
        }
    }
    else{
        if(computerSelection === 'rock'){
            p.innerText = `You lose! ${computerSelection} beats ${humanSelection}.`;
            computerScore++;
        }
        else if(computerSelection === 'paper'){
            p.innerText = `You Win! ${humanSelection} beats ${computerSelection}.`;
            humanScore++;
        }
        else{
            p.innerText = `Its a DRAW!`;
        }
    }
    if(rounds>0 && rounds%5==0){
        if(humanScore>computerScore){
            p.innerText += " 5 rounds over.You defeated the easiest bot made by me ! Well Played,Noob ! ";
        }
        else if(humanScore<computerScore){
            p.innerText += " 5 rounds over.You lost to the most easieast bot ??? Hell nawwwwwwh...";
        }
        else{
            p.innerText += " 5 rounds over.You didnt win or lose . But you sure wastes your time!";
        }       
    }
});

// function playGame(){
//     let humanSelection = getHumanChoice();
//     let computerSelection = getComputerChoice();
//     playRound(humanSelection,computerSelection);
    

//     if(humanScore>computerScore){
//         p.innerText = "You defeated the easiest bot made by me ! Well Played,Noob ! ";
//     }
//     else if(humanScore<computerScore){
//         p.innerText = "You lost to the most easieast bot ??? Hell nawwwwwwh...";
//     }
//     else{
//         p.innerText = "You didnt win or lose . But you sure wastes your time!";
//     }
// }

// playGame();
// btn1.addEventListener('click',getHumanChoice);
// btn2.addEventListener('click',playRound);
// btn3.addEventListener('click',playGame);

