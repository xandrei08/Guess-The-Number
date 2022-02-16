/* Game Function :
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Notify player of guesses remaining
- Notify the playerof the correct answer if loose
- Let player choose to play again.
*/

// Game values.
let min = 1,
  max = 10,
  guessesLeft = 3,
  winningNum = getRandom(min, max);

const game = document.querySelector(".game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessInput = document.querySelector(".guess-input"),
  submitBtn = document.querySelector("#guess-btn"),
  message = document.querySelector(".message");

minNum.textContent = min;
maxNum.textContent = max;

//  submit Event listeners.

submitBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);
  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please add a number between ${min} and ${max}`, "red");
  } else {
    guessesLeft -= 1;
    if (guess === winningNum) {
      gameOver();
      setMessage(
        `Congratulations, You WON! The number is ${winningNum}`,
        "green"
      );
      playAgain();
    } else {
      message.textContent = `You have ${guessesLeft} guesses left`;
      message.style.color = "red";
      message.style.borderColor = 'red";';
      if (guessesLeft === 0) {
        gameOver();
      }
    }
  }
});

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

function gameOver() {
  //   submitBtn.disabled = true;
  message.textContent = `You lost! The number was ${winningNum}. Play again`;
  submitBtn.value = "Play Again";
  submitBtn.className = "play-again";
  playAgain();
}
// Play again
function playAgain() {
  let btn = document.querySelector(".play-again");
  btn.addEventListener("mousedown", function () {
    window.location.reload();
  });
}

// Random Number

function getRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
