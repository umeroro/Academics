function getUserName(userName){
    console.log("Hello, " + userName);
}

function getQuestion(userQuestion){
    console.log(userName + " " + userQuestion);
}

function getComputer(){
    var compChoice = Math.floor(Math.random()*8);
    if(compChoice === 0){
        return "Better not tell you now."
    } else if(compChoice === 1){
        return "Concentrate and ask again."
    } else if(compChoice === 2){
        return "Reply hazy try again"
    } else if(compChoice === 3){
        return "Cannot predict now"
    } else if(compChoice === 4){
        return "Dont count on it"
    } else if(compChoice === 5){
        return "My reply is no."
    } else if(compChoice === 6){
        return "Outlook not so good"
    } else if(compChoice === 7){
        return "Signs point to yes"
    }
}

var userName = prompt("Enter your name");
var name = getUserName(userName);
var userQuestion = prompt("Enter your question?");
var question = getQuestion(userQuestion);
console.log("The Eight Ball anwser is :" + getComputer());
