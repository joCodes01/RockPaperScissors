
let weapon = ['rock', 'paper', 'scissors'];
//select random array element from weapon array
function getComputerChoice() {
    computerChoice = weapon [ (Math.floor(Math.random() * weapon.length)) ];
    //console.log(computerChoice);
    return computerChoice;
}

console.log(getComputerChoice());





//play a single round of Rock Paper, Scissors. Make playerSelection parameter case insensitive.
const playerSelection = "rock";
const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {

    let youWin = `You win, ${playerSelection} beats ${computerSelection}`;
    let youLoose = `You loose ${computerSelection} beats ${playerSelection}`;
    let youDraw = `It's a draw!`;

    if (playerSelection == computerSelection ) {
        alert( youDraw );
    } else if (playerSelection == "rock" && computerSelection == 'paper') {
        alert( youLoose );
    } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
        alert( youWin );
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
        alert( youWin );
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        alert( youLoose );
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
        alert( youLoose );
    }else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        alert( youWin );
    } else {
        alert('Great Game!');
    }
}

//console.log('player selection is', playerSelection);
//console.log('computer selection is',computerSelection)

//console.log( playRound( playerSelection, computerSelection ));
//console.log(computerSelection);

