let randomNumber = Math.floor(Math.random() * 100 + 1);
let triesTaken = 0;
let tries = 6;
function guessNumber() {
    //Collect input from the user
    let guess = document.querySelector(".inputs-Values").value;
    let output = document.querySelector(".final-output"); // get output element

    //If the user inputs a bad input ie 0, empty string, number greater that 100, number less than zero Print "Please enter a number between 1 and 100"
    if (guess <= 0 || guess === "" || guess > 100) {
        output.textContent = "Please enter a number between 1 and 100";

        //If the users guess is higher than the random number print Number is too high, try again (hint use .final-out class to print)
    } else if (guess > randomNumber) {
        triesTaken += 1;
        output.textContent = "Number is too high, try again";
        document.querySelector(".Tries-output").textContent =
            "Number of Tries:" + triesTaken;
        //If the users guess is lower than the random number print Number is too low, try again  (hint use .final-out class to print)
    } else if (guess < randomNumber) {
        triesTaken += 1;
        output.textContent = "Number is too low, try again";
        document.querySelector(".Tries-output").textContent =
            "Number of Tries:" + triesTaken;
        //If the user has guessed the random number correctly print out the randomNumber with a message "Guess is correct. You win!"
    } else {
        triesTaken += 1;
        output.textContent = `${guess} is correct, You win!`;
        document.querySelector(".Tries-output").textContent =
            "It took you " + triesTaken + " tries";
    } // check If the user were to exceed the number of tries
    if (triesTaken > tries) {
        document.querySelector(".Tries-output").textContent =
            "You Lose, the number was " + randomNumber;
        document.querySelector(".final-output").textContent = "";
    }
}

// For this task we will be making a "New Game" button function which will reset our game,
// Once the user clicks on this button the user will have new random number to guess
// 1. Reset the values inside the body of the function
// 2. Attach our new game button using an event listener to the .btnNewGame button
function newGame() {
    //Reset randomNumber
    randomNumber = Math.floor(Math.random() * 100 + 1);
    //Reset users input field
    guess = document.querySelector(".inputs-Values").value = "";

    //Reset tries, and triesTaken by the user
    triesTaken = 0;
    document.querySelector(".Tries-output").textContent = "";
    document.querySelector(".final-output").textContent =
        "Guess a number between 1 and 100";
}

//keyboard exception
function keyBoardEvents(e) {
    if (e.keyCode === 13) {
        guessNumber();
    }
}

document.querySelector(".btnGuess").addEventListener("click", guessNumber);
document.addEventListener("keypress", keyBoardEvents);
document.querySelector(".btnNewGame").addEventListener("click", newGame);
