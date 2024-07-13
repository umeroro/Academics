function userInput(input){
    input = input.toLowerCase();
    if (input === 'bear' || input === 'human' || input === 'gun') {
        return input;
    } else {
        return 'Please enter valid option';
    }
}

function computerChoice(){
    var compChoice = Math.floor(Math.random()*3);
    if(compChoice === 0){
        return 'bear';
    }
    if(compChoice === 1){
        return'human';
    }
    if(compChoice === 2){
        return'gun';
    }
}

function compareChoice(input,compChoice){
    if(input === compChoice){
        return 'It is a Tie!';
    }
    if(input === 'bear'){
        if(compChoice === 'human'){
            return 'Bear mauls human!';
        }
        else{
            return 'You have disarmed a gun!';
        }
    }
    if(input === 'human'){
        if(compChoice === 'bear'){
            return 'Bear mauls human!';
        }
        else{
            return 'You have been shot by a gun!';
        }
    }
    if(input === 'gun'){
        if(compChoice === 'human'){
            return 'You have been shot by a gun!';
        }
        else{
            return 'You have disarmed a gun!';
        }
    }
}

function playGame(){
    var input = prompt("Enter your Choices : Bear, Human, Gun");
    var getInput = userInput(input);
    var getCompChoice = computerChoice();
    console.log(getInput);
    console.log(getCompChoice);
    console.log(compareChoice(getInput, getCompChoice));
}

playGame();