// Array of choices
const CHOICES = ['rock', 'paper', 'scissors'];
// Array of choices that counter CHOICES at corresponding indices
const ANTICHOICES = ['paper', 'scissors', 'rock'];
const WINNINGPOINTS = 5;
const humanScore = document.getElementById('humanscore');
const computerScore = document.getElementById('computerscore');
const choiceBox = document.getElementById('choice');

let playGame = event => {
    
    const playerSelection = event.target.value;
    const computerSelection = getComputerChoice();

    playRound(playerSelection, computerSelection);
    
    if (+humanScore.textContent === WINNINGPOINTS) {
        document.getElementById('result').textContent = 'You win!';
        choiceBox.removeEventListener('click', playGame);
    } else if (+computerScore.textContent === WINNINGPOINTS) {
        document.getElementById('result').textContent = 'Computer wins!';
        choiceBox.removeEventListener('click', playGame);
    }
}

choiceBox.addEventListener('click', playGame);


function getComputerChoice () {
    let randInt = Math.floor(Math.random() * CHOICES.length);
    return CHOICES[randInt];
}

function playRound(humanChoice, computerChoice) {
    let msg = '';

    // Check draw
    if (humanChoice === computerChoice) {
        result.textContent = 'Draw!';
        return;
    }
    // Check lose
    for (let i = 0; i < CHOICES.length; i++) {
        if (humanChoice === CHOICES[i] && computerChoice === ANTICHOICES[i]) {
            msg = `You lose, ${computerChoice} beats ${humanChoice}!`;
            result.textContent = msg;
            return +computerScore.textContent++;
        }
    }
    // Else win
    msg = `You win, ${humanChoice} beats ${computerChoice}!`;
    result.textContent = msg;
    return +humanScore.textContent++;
}  
