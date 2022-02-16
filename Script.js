let min = 1,
  max = 10,
  winningNum = getRandomNum(min, max);
guessesLeft = 3;

// UI elements

const game = document.querySelector(".game"),
  minNum = document.querySelector(".min-num"),
  maxNum = document.querySelector(".max-num"),
  guessBtn = document.querySelector("#guess-btn"),
  guessInput = document.querySelector(".guess-input"),
  message = document.querySelector(".message");

// Assign UI min and max;

minNum.textContent = min;
maxNum.textContent = max;

// Play again event listenres
game.addEventListener("mousedown", function (e) {
  if (e.target.className === "play-again") {
    window.location.reload();
  }
});

//  event listeners for btn.
guessBtn.addEventListener("click", function () {
  let guess = parseInt(guessInput.value);

  // Validate our input

  if (isNaN(guess) || guess < min || guess > max) {
    setMessage(`Please enter a number between ${min} and ${max}, 'red'`);
  }

  // Check if Won
  if (guess === winningNum) {
    // // Disable input
    // guessInput.disabled = true;
    // //Change border color
    // guessInput.style.borderColor = "green";
    // // Set message
    // setMessage(`${winningNum} is correct YOU WIN!`, "green");

    gameOver(true, `${winningNum} is correct YOU WIN!`);
  } else {
    // Wrong number
    guessesLeft -= 1; // this will take 1 away.
    if (guessesLeft === 0) {
      // Game Over - player lost.
      // Disable input
      //   guessInput.disabled = true;
      //   //Change border color
      //   guessInput.style.borderColor = "red";
      //   // Set message
      //   setMessage(
      //     `Game over, you lost. The correct number was ${winningNum}`,
      //     "red"
      //   );
      gameOver(
        false,
        `Game over, you lost. The correct number was ${winningNum}`
      );
    } else {
      // Game continue - wrong answer

      // Clear input

      guessInput.value = "";
      // Notify user that is the wrong number;
      setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, "red");
      guessInput.style.borderColor = "red";
    }
  }
});

// Set message

function setMessage(msg, color) {
  message.style.color = color;
  message.textContent = msg;
}

// Game over
function gameOver(won, msg) {
  let color;
  won === true ? (color = "green") : (color = "red");
  guessInput.disabled = true;
  //Change border color
  guessInput.style.borderColor = color;
  //setText color
  message.style.color = color;
  // Set message
  setMessage(msg);

  // Play Again
  guessBtn.value = "Play Again";
  guessBtn.className += "play-again";
}

// Get wining number

function getRandomNum(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
