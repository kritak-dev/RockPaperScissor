const choices = document.querySelector('.choices');


let arrayChoice = ['rock', 'paper', 'scissor'];
let computerChoice = arrayChoice[Math.floor(Math.random() * 2)];

let playerSelection = choices.addEventListener('click', playGame);

function playGame(evt) {
    playerChoice = evt.target.textContent.toLowerCase();
    let winner = getWinner(computerChoice, playerChoice);
    const div = document.createElement('div');
    div.classList.add('winner');
    if (winner === 'player') {
        div.textContent = 'You Win!!!';
        div.style.cssText = 'background-color: green; color: black';
    } else if (winner === 'computer') {
        div.textContent = 'You Lose!!!';
        div.style.cssText = 'background-color: red; color: black';
    } else {
        div.textContent = "It's a draw";
        div.style.cssText = 'background-color: yellow; color: black';
    }
    const body = document.querySelector('body');
    body.appendChild(div);
}

function getWinner(computerSelection, playerSelection) {

        if (computerSelection == `rock` && playerSelection == `paper`) {
            console.log(`You win! Paper beats Rock`);
            return `player`;
        } else if (computerSelection == `rock` && playerSelection == `scissor`) {
            console.log(`You lose! Rock beats Scissor`);
            return `computer`;
        } else if (computerSelection == `paper` && playerSelection == `scissor`) {
            console.log(`You win! Scissor beats Paper`);
            return `player`;
        } else if (computerSelection == `paper` && playerSelection == `rock`) {
            console.log(`You lose! Paper beats Rock`);
            return `computer`;
        } else if (computerSelection == `scissor` && playerSelection == `rock`) {
            console.log(`You win! Rock beats Scissor`);
            return `player`;
        } else if (computerSelection == `scissor` && playerSelection == `paper`) {
            console.log(`You lose! Scissor beats Paper`);
            return `computer`;
        } else {
            console.log(`Draw`);
            return `Draw`;
        }
    }
//playGame();
