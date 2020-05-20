/*
Game Function
- player must guess a number between a min and max
- player gets a certain amount of guesses
- notify plauer of guesses remaining
- notify the player of the correct answer if loss
- let player choose to play again
*/

//game values
let min = 1,
  max = 10,
  winningNum = Math.floor(Math.random() * 10 + 1),
  guessesLeft = 3;

// UI elements
const game = document.querySelector("#game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector("#guess-input"),
  message = document.querySelector(".message");

//Assign UI min and MAx
minNum.textContent = min;
maxNum.textContent = max;

game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//Event listener button
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  //game validation
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max} `, "red");
    return;
  }
  if (guess === winningNum) {
    // guessInput.disabled = true;
    // guessInput.style.borderColor = "purple";
    // setMessage(`${winningNum} is correct, you win!`);
    gameOver(true, `number is correct, you win!`);
  } else {
    guessesLeft -= 1;

    if (guessesLeft === 0) {
      gameOver(false, `Game Over correct answer is ${winningNum}`);
    } else {
      guessInput.value = "";
      setMessage(`Guess is not correct, you have ${guessesLeft} guesses left.`);
    }
  }
});

function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : "red";

  guessInput.disabled = true;
  guessInput.style.borderColor = "color";
  //set text color
  message.style.borderColor = "color";
  message.style.color = "color";
  setMessage(msg);

  //play again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

//set message
function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}
