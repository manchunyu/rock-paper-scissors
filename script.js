// Array of choices
const CHOICE = ['rock', 'paper', 'scissors'];
// Array of choices that counter CHOICE at corresponding indices
const ANTICHOICE = ['paper', 'scissors', 'rock'];


function getComputerChoice () {
    let randInt = Math.floor(Math.random() * CHOICE.length);
    return CHOICE[randInt];
}


function getHumanChoice() {

    // Loop if choice is invalid
    while (true) {
        
        let humanInput = prompt('Rock/ Paper/ Scissors?');
        let humanChoice = humanInput.toLowerCase().trim();

        // Check invalid input
        for (let i = 0; i < CHOICE.length; i++) {
            if (humanChoice === CHOICE[i]) {
                return humanChoice;
            } 
        } 
    }   
}


function playGame() {

    // No. of rounds
    const ROUNDS = 5;

    // Initialize scores
    let humanScore = 0,
        computerScore = 0;


    function playRound(humanChoice, computerChoice) {

        // Check draw
        if (humanChoice === computerChoice) {
            console.log('Draw!');
            return;
        }
        // Check lose
        for (let i = 0; i < CHOICE.length; i++) {
            if (humanChoice === CHOICE[i] && computerChoice === ANTICHOICE[i]) {
                console.log(`You lose, ${computerChoice} beats ${humanChoice}!`);
                return computerScore++;
            }
        }
        // Else win
        console.log(`You win, ${humanChoice} beats ${computerChoice}!`);
        return humanScore++;
    }

    // Play 5 rounds
    for (let i = 0; i < ROUNDS; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
}


playGame();