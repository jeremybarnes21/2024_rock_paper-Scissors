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
const scoreDisplay = document.createElement('p')
const resultsDiv = document.querySelector('#results-display');
const resultsDisplay = document.createElement('p');
const resetBtnDiv = document.querySelector('#reset-button');
const resetBtn = document.createElement('button');
const selectionButtons = document.querySelectorAll('.player-selection');


function updateScore(){
    scoreDisplay.textContent = `${playerScore} - ${computerScore}`;
    scoreDiv.appendChild(scoreDisplay);
}
updateScore();


function checkIfWinner(){
    if (playerScore == 5){
        declarePlayerWinner();
        displayResetButton();
    }
    if (computerScore == 5){
        declareComputerWinner();
        displayResetButton();
    }
}

function displayResetButton(){
    resetBtn.textContent = "Play Again";
    resetBtnDiv.appendChild(resetBtn);
}

function resetScore(){
    playerScore = 0;
    computerScore = 0;
    coreDisplay.textContent = `${playerScore} - ${computerScore}`;
    scoreDiv.appendChild(scoreDisplay);
}

function declarePlayerWinner(){
    resultsDisplay.textContent = 'You won! You are the ultimate champion!';
    resultsDiv.appendChild(resultsDisplay);
}
function declareComputerWinner(){
    resultsDisplay.textContent = 'You lost. This is why ChatGPT will take your job.';
    resultsDiv.appendChild(resultsDisplay);
}


function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    let randomNumber = Math.round(Math.random() * 2);
    let ComputerChoice = choices[randomNumber];
    return ComputerChoice;
}

function getPlayerSelection(buttonClicked){
    let playerSelection = buttonClicked.id;
    return playerSelection;
}

function playRound(buttonClicked) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerSelection(buttonClicked);

    if (!(playerChoice in outcomes)) {
        alert(`You picked ${playerChoice}. That is not an option. Please select rock, paper, or scissors.`);
        return;
    }

    let outcome = outcomes[playerChoice][computerChoice];
    switch (outcome) {
        case 'draw':
            alert(`You both selected ${computerChoice}. It is a draw.`);
            break;
        case 'win':
            alert(`You won! Your ${playerChoice} beat the computer's ${computerChoice}.`);
            ++playerScore;
            break;
        case 'lose':
            alert(`Your ${playerChoice} lost to the computer's ${computerChoice}.`);
            ++computerScore;
            break;
    }
    updateScore();
    checkIfWinner();
}






