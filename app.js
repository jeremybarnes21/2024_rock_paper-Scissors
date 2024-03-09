/*const drawMessage = alert(`You both selected ${computerChoice}. It is a draw.`);
    const loseMessage = alert(`Your ${playerSelection} lost to the computer's ${computerChoice}`);
    const winMessage = alert(`You won! Your ${playerSelection} beat the computer's ${computerChoice}`);
    const tryAgainMessage = alert(`You picked ${playerSelection}. That is not an option. Try again.`);*/

    const outcomes = {
        'rock': { 'rock': 'draw', 'paper': 'lose', 'scissors': 'win' },
        'paper': { 'rock': 'win', 'paper': 'draw', 'scissors': 'lose' },
        'scissors': { 'rock': 'lose', 'paper': 'win', 'scissors': 'draw' }
    };

let playerScore = 0;
let computerScore = 0;

const playButton = document.querySelector('.play-button');
const scoreDiv = document.querySelector('#score-display');
const selectionButtons = document.querySelectorAll('.player-selection');

const scoreDisplay = document.createElement('p')
scoreDisplay.textContent = `${playerScore} - ${computerScore}`;
scoreDiv.appendChild(scoreDisplay);

function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    let randomNumber = Math.round(Math.random() * 2);
    let ComputerChoice = choices[randomNumber];
    return ComputerChoice;
}

function getPlayerSelection(){
    let playerSelection = prompt("Play Rock, Paper, Scissors!","Choose your weapon").toLowerCase();
    console.log(playerSelection);
    return playerSelection;
}

function playRound() {
    let computerChoice = getComputerChoice();
    let playerSelection = getPlayerSelection();

    if (!(playerSelection in outcomes)) {
        alert(`You picked ${playerSelection}. That is not an option. Please select rock, paper, or scissors.`);
        return;
    }

    let outcome = outcomes[playerSelection][computerChoice];
    switch (outcome) {
        case 'draw':
            alert(`You both selected ${computerChoice}. It is a draw.`);
            break;
        case 'win':
            alert(`You won! Your ${playerSelection} beat the computer's ${computerChoice}.`);
            break;
        case 'lose':
            alert(`Your ${playerSelection} lost to the computer's ${computerChoice}.`);
            break;
    }
}

function playGame(){
    for (let i = 0; i<5; i++){
        playRound();
    } 
}





selectionButtons.forEach(button => {
    button.addEventListener("click", playRound);
});

