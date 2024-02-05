
/**
 * Function to get the user's choice
 * Recursively calls itself if the user enters an invalid choice
 */
function getUserChoice(userInput) {
    var userInput = prompt("Do you choose rock, paper or scissors?");
    userInput = userInput.toLowerCase();
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        alert("Please enter 'rock', 'paper', or 'scissors'.");
        return getUserChoice();
    }
}

/**
 * Function to randomly generate the computer's choice
*/ 
function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
}

/**
 * Function to decide the winner
 */ 
function decideWinner(userChoice,computerChoice) {
    if (userChoice === computerChoice) {
        return "The game is a tie!";
    }
    else if (userChoice === 'rock') {
        return computerChoice === 'paper' ? "Computer wins!" : "You win!";
    }
    else if (userChoice === 'paper') {
        return computerChoice === 'scissors' ? "Computer wins!" : "You win!";
    }
    else {
        return computerChoice === 'rock' ? "Computer wins!" : "You win!";
    }
}

/**
 * Driver function to play the game
 */ 
function play() {
    var userChoice = getUserChoice();
    var computerChoice = getComputerChoice();
    alert("You chose: " + userChoice);
    alert("The computer chose: " + computerChoice);
    alert(decideWinner(userChoice, computerChoice));
}

// Call the driver function
play();