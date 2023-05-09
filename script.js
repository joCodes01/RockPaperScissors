//write a program to play 'rock, paper, scissors' game against the computer


//COMPUTER CHOICE- generate random choice of weapon
let choice = ['rock', 'paper', 'scissors'];
//select random array element from weapon array
function getComputerChoice() {
    computerChoice = choice [ (Math.floor(Math.random() * choice.length)) ];
    return computerChoice;
}


//USER CHOICE- collect user choice from prompt input
function getPlayerChoice() {
    playerChoice = prompt('Choose your weapon', 'rock, paper or scissors?');
    return playerChoice;
}


//assign values to player variables 
const playerSelection = getPlayerChoice().toLowerCase();
const computerSelection = getComputerChoice();


//messages to return to player
let youWin = `You win, ${playerSelection} beats ${computerSelection}`;
let youLose = `You lose, ${computerSelection} beats ${playerSelection}`;
let youDraw = `It's a draw!`;


//check what values are assigned to players
//console.log('player selection is      ', playerSelection);
//console.log('computer selection is    ',computerSelection);



//function to play one round
function playRound() {
    
    if (playerSelection == computerSelection) {
        return youDraw;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        return youLose;
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        return youWin; 
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        return youWin;
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return youLose;
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        return youLose;
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return youWin;
    } else {
        return('Great game!')
    }
}

//check result of function
//console.log(playRound());


//function to play five rounds and report player as winner or loser at the end
function game() {

     //check player selections
     console.log('player ', playerSelection);
     console.log('computer ', computerSelection);

     //play a round of the game
     playRound(playerSelection, computerSelection);
     return playRound();
}
  
console.log(game());


