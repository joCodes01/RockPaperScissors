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
//put message options into an array
let message = [ youWin, youLose, youDraw];


//check code: what values are assigned to players?
console.log('player selection is      ', playerSelection);
console.log('computer selection is    ',computerSelection);

//make global player score variables
let playerScore = 0;
let computerScore = 0;


//function to play one round
function playRound() {
    
      if (playerSelection == computerSelection) {
        return youDraw;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore = computerScore++;
        return message[1]; //you lose
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        playerScore ++;
        return message[0]; //you win
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        playerScore ++;
        return message[0]; //you win
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        computerScore ++;
        return message[1]; //you lose
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        computerScore ++;
        return message[1]; //you lose
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        playerScore ++;
        return message[0]; //you win
    } else {
        return('oops! Type rock, paper or scissors!')
    }
}


//function to play five rounds and report player as winner or loser at the end
function game() {

     //check code: what values are assigned to player selections?
     //console.log('player ', playerSelection);
     //console.log('computer ', computerSelection);

     playRound();
     playRound();
     playRound();
     playRound();
     playRound();
    
     return playRound();
}
  
console.log(game());

console.log(computerScore);
console.log(playerScore);