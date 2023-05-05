let weapon = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    computerChoice = weapon [ (Math.floor(Math.random() * weapon.length)) ];
    console.log(computerChoice);
}

console.log(getComputerChoice());