var possibilities = ["rock", "paper", "scissors"];
var resultComputer;
var choiceComputer;
var resultUser;
var choiceUser;

function getComputer() {
    return resultComputer = Math.floor(Math.random() * 3);
}
function getUser() {
    return resultUser = Math.floor(Math.random() * 3);
}

function displayChoice() {
    if (resultComputer == "0") {
        choiceComputer = possibilities[0];
        console.log("Computer choice:", possibilities[0]);
    } else if (resultComputer == "1") {
        choiceComputer = possibilities[1];
        console.log("Computer choice:", possibilities[1]);
    } else {
        choiceComputer = possibilities[2];
        console.log("Computer choice:", possibilities[2]);
    }
    if (resultUser == "0") {
        choiceUser = possibilities[0];
        console.log("User choice:", possibilities[0]);
    } else if (resultUser == "1") {
        choiceUser = possibilities[1];
        console.log("User choice:", possibilities[1]);
    } else {
        choiceUser = possibilities[2];
        console.log("User choice:", possibilities[2]);
    }
}

function play() {
    if (choiceComputer == choiceUser) {
        console.log("Draw!");
    } else if (choiceComputer == "rock" && choiceUser == "paper") {
        console.log("User wins!");
    } else if (choiceComputer == "rock" && choiceUser == "scissors") {
        console.log("Computer wins!");
    } else if (choiceComputer == "paper" && choiceUser == "rock") {
        console.log("Computer wins!");
    } else if (choiceComputer == "paper" && choiceUser == "scissors") {
        console.log("User wins!");
    } else if (choiceComputer == "scissors" && choiceUser == "rock") {
        console.log("User wins!");
    } else if (choiceComputer == "scissors" && choiceUser == "paper") {
        console.log("Computer wins!");
    }
}



getComputer();
getUser();
displayChoice();
play();
console.log("Hit refresh page to play again!");