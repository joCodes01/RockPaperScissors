
let weapon = ['rock', 'paper', 'scissors'];
//select random array element from weapon array
function getComputerChoice() {
    computerChoice = weapon [ (Math.floor(Math.random() * weapon.length)) ];
    return computerChoice;
}


//play a single round of Rock Paper, Scissors. Make playerSelection parameter case insensitive.


//assign values to player selections
const playerEntry = 'Rock';
const playerSelection = playerEntry.toLowerCase();
const computerSelection = getComputerChoice();


//messages to return to player
let youWin = `You win, ${playerSelection} beats ${computerSelection}`;
let youLoose = `You lose, ${computerSelection} beats ${playerSelection}`;
let youDraw = `It's a draw!`;

//create message array
let message = [ youWin, youLose, youDraw];


//check what values are assigned to players
console.log('player selection is      ', playerSelection);
console.log('computer selection is    ',computerSelection);



//game function
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

console.log(playRound());


