
let weapon = ['rock', 'paper', 'scissors'];
//select random array element from weapon array
function getComputerChoice() {
   computerChoice = weapon [ (Math.floor(Math.random() * weapon.length)) ];
    console.log(computerChoice);
}


//play a single round of Rock Paper, Scissors. Make playerSelection parameter case insensitive.
const playerSelection = "rock";
const computerSelection = getComputerChoice();


function playRound(playerSelection, computerSelection) {
    
    
}

//console.log(playRound(playerSelection, computerSelection));
//console.log(computerSelection);

