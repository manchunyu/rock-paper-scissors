const CHOICE = ['rock', 'paper', 'scissors'];

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

console.log(getHumanChoice());