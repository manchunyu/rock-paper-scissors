const CHOICE = ['rock', 'paper', 'scissors'];
const ANTICHOICE = ['paper', 'scissors', 'rock'];


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





function playGame() {
    const ROUNDS = 5;

    let humanScore = 0,
        computerScore = 0;


    function playRound(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) {
            console.log('Draw!');
            return;
        }
    
        for (let i = 0; i < CHOICE.length; i++) {
            if (humanChoice === CHOICE[i] && computerChoice === ANTICHOICE[i]) {
                console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
                return computerScore++;
            }
        }

        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        return humanScore++;
    }

    for (let i = 0; i < ROUNDS; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}


playGame();