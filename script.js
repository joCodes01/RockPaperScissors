//write a program to play 'rock, paper, scissors' game against the computer


//COMPUTER CHOICE- generate random choice of weapon
let choice = ['rock', 'paper', 'scissors'];
//select random array element from weapon array
function getComputerChoice() {
    computerChoice = choice [ (Math.floor(Math.random() * choice.length)) ];
    return computerChoice;
}


//USER CHOICE- assign user choice from prompt input
function getPlayerChoice() {
    playerChoice = prompt('Choose your weapon', 'rock, paper or scissors?');
    return playerChoice.toLowerCase();;
}


//make global player score variables
let playerScore = 0;
let computerScore = 0;


//function to play one round
function playRound() {
    //getComputerChoice();
    //getPlayerChoice();

    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();

    console.log('player ', playerSelection);
    console.log('computer ', computerSelection);

    //message to return to player
    let youWin = `You win, ${playerSelection} beats ${computerSelection}`;
    let youLose = `You lose, ${computerSelection} beats ${playerSelection}`;
    let youDraw = `It's a draw!`;
    //put message options into an array
    let message = [ youWin, youLose, youDraw];


      if (playerSelection == computerSelection) {
        return youDraw;
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
        computerScore++;
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

     console.log(playRound());
     console.log(playRound());
     console.log(playRound());
     console.log(playRound());
     console.log(playRound());

     if (playerScore > computerScore) {
        return 'You win this round';
    } else if (playerScore < computerScore) {
        return 'You lose this round'; 
    } else if (playerScore == computerScore) {
        'It\'s a draw!'; 
     } else {
        return 'Oops, something went wrong. Try again.'
    }
}


console.log(game());
console.log('player score result ', playerScore);
console.log('computer score result ',computerScore);

