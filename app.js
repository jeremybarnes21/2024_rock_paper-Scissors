console.log('hello world')

const playButton = document.querySelector('.play-button');

function getComputerChoice(){
    let choices = ["rock","paper","scissors"];
    let randomNumber = Math.round(Math.random() * 2);
    return choices[randomNumber];
}

function getPlayerSelection(){
    let playerSelection = prompt("Play Rock, Paper, Scissors!","Choose your weapon").toLowerCase();
    console.log(playerSelection);
    return playerSelection;
}

playButton.addEventListener("click", getPlayerSelection);
