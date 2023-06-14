//write a program to play 'rock, paper, scissors' game against the computer


//COMPUTER CHOICE- generate random choice of weapon
let choice = ['rock', 'paper', 'scissors'];
//select random array element from weapon array
function getComputerChoice() {
    computerChoice = choice [ (Math.floor(Math.random() * choice.length)) ];
    return computerChoice;
}


//make global player score variables
let playerScore = 0;
let computerScore = 0;


//PLAY ONE ROUND
function playRound() {
    
    //USER CHOICE from button click
    const buttons = document.querySelectorAll('button');

    let playerSelection;

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            playerSelection = button.className;
            const computerSelection = getComputerChoice();
    
            console.log("selection: " + playerSelection);
            console.log("comp selection: " + getComputerChoice());

                //message to return to player
                let youWin = `You win, ${playerSelection} beats ${computerSelection}`;
                let youLose = `You lose, ${computerSelection} beats ${playerSelection}`;
                let youDraw = `It's a draw!`;
                //put message options into an array
                let message = [ youWin, youLose, youDraw];


                if (playerSelection == computerSelection) {
                    console.log("youDraw") ;
                } else if (playerSelection == 'rock' && computerSelection == 'paper') {
                    computerScore++;
                    console.log(message[1]); //you lose
                } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
                    playerScore ++;
                    console.log(message[0]); //you win
                } else if (playerSelection == 'paper' && computerSelection == 'rock') {
                    playerScore ++;
                    console.log(message[0]); //you win
                } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
                    computerScore ++;
                    console.log(message[1]); //you lose
                } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
                    computerScore ++;
                    console.log(message[1]); //you lose
                } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
                    playerScore ++;
                    console.log(message[0]); //you win
                } else {
                    console.log('oops! Type rock, paper or scissors!');
                }
                
            } )
        })
    }

        
playRound();

//function to play five rounds and report player as winner or loser at the end
/*
function game() {

     console.log(playRound());
     console.log(playRound());
     console.log(playRound());
     console.log(playRound());
     console.log(playRound());

     if (playerScore > computerScore) {
        return 'Congratulations! You win this round';
    } else if (playerScore < computerScore) {
        return 'Bad luck! You lose this round'; 
    } else if (playerScore == computerScore) {
        'It\'s a draw!'; 
     } else {
        return 'Oops, something went wrong. Try again.'
    }
}

//console.log(game());
console.log('player score result ', playerScore);
console.log('computer score result ',computerScore);
*/




/*
// SHOW RESULTS TO USER

let playerWeapon = document.querySelector('#container2');
container2.style.backgroundColor = 'lightBlue';
let playerHeader = document.createElement('h2');
playerHeader.classList.add('playerHeader');
playerHeader.textContent = " The players selection is: ";
container2.appendChild(playerHeader);
*/




