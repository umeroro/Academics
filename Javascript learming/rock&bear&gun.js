function getUserChoice(userInput){
    userInput = userInput.toLowerCase();
    if (userInput === 'bear' || userInput === 'human' || userInput === 'gun'){
        return userInput;
    } else {
        console.log("Invalid Input")
    }
}
function getComputerChoice(){
    randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber == 0) {
        return 'bear';
    } else if (randomNumber == 1) {
        return 'human';
    } else {
        return 'gun';
    }
}
function determineWinner(userChoice, computerChoice){
    if (userChoice == computerChoice){
        return "It's Tie";
    }
    if (userChoice == 'human') {
        if (computerChoice == 'bear') {
            return 'You have been mauled by a bear';
        } else {
            return 'You have disarmed a gun';
        }
    } 
    if (userChoice === 'bear') {
        if (computerChoice === 'gun') {
            return 'You have been shot by a gun';
        } else {
            return 'You have mauled a human';
        }
    }
    if (userChoice === 'gun') {
        if (computerChoice === 'human') {
            return 'Your gun has been disarmed';
        } else {
            return 'You have shot a bear';
        }
    }
}
function playGame() {
    var promptUsesChoice = prompt("Please choose bear, human or gun");
    var userChoice = getUserChoice(promptUsesChoice);
    var computerChoice = getComputerChoice();
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();