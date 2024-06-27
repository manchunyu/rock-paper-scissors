const CHOICE = ['rock', 'paper', 'scissors'];
const ANTICHOICE = ['paper', 'scissors', 'rock'];

let humanScore = 0,
    computerScore = 0;


function getComputerChoice () {
    let randInt = Math.floor(Math.random() * 3);
    return CHOICE[randInt];
}

function getHumanChoice() {
    while (true) {
        let humanInput = prompt('Choice?');
        let humanChoice = humanInput.toLowerCase().trim();
        for (let i = 0; i < CHOICE.length; i++) {
            if (humanChoice === CHOICE[i]) {
                return humanChoice;
            } 
        } 
    }   
}

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        console.log('Draw!');
        return;
    }

    for (let i = 0; i < CHOICE.length; i++) {
        if (humanChoice === CHOICE[i] && computerChoice === ANTICHOICE[i]) {
            console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
            computerScore++;
            return;
        }
    }
    console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
    humanScore++;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);