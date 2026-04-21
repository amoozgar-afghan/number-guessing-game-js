const log = (msg) => {
  alert(msg);
  console.log(msg);
};

const getRandomNumber = function () {
  return Math.floor(Math.random() * 100) + 1;
}

const getPlayerGuess = () => {
  let playerGuess = prompt("Enter your guess as an integer number Between numbers 1 and 100:");

  if (playerGuess === null) {
    if (confirm("Do you want to exit the game?")) {
      console.log("Thanks for playing! Goodbye!");
      return "QUIT";
    }
    return "RETRY";
  }

  if (playerGuess.trim() === "") {
    log("Nothing entered. Type a whole number — no letters, spaces, or symbols."); updated
    return "RETRY";
  }

  if (/[a-zA-Z]/.test(playerGuess)) {
    log("Letters aren't allowed. Enter only digits, like 42 or 7."); new
    return "RETRY";
  }

  if (/[^0-9.\-]/.test(playerGuess.trim())) {
    log("Symbols aren't allowed. Use digits only — no $, !, +, or spaces."); new
    return "RETRY";
  }

  const parsed = Number(playerGuess);

  if (isNaN(parsed)) {
    log("That's not a number. Enter a whole number between 1 and 100."); updated
    return "RETRY";
  }

  if (!Number.isInteger(parsed)) {
    log("Decimals aren't allowed. Round to the nearest whole number, like 34 instead of 34.5."); new
    return "RETRY";
  }

  if (parsed <= 0) {
    log("The number must be at least 1. Negative numbers and zero are out of range."); new
    return "RETRY";
  }

  if (parsed > 100) {
    log("Too big! The highest valid guess is 100."); new
    return "RETRY";
  }

  return parsed;
};


const checkGuess = function(playerGuess, randomNumber, attempts) {
  
  
  if (playerGuess === randomNumber) {
    return "Congratulations! You guessed the number in " + attempts + " attempts!" + " Your score is " + (11-attempts)*10 + " out of 100.";
  } else if (playerGuess < randomNumber) {
    return "Too low! Try again. You have " + (10 - attempts) + " attempts left.";
  } else if (playerGuess > randomNumber) {
    return "Too high! Try again. You have " + (10 - attempts) + " attempts left.";
  } 
  
}

const game = () => {
  alert("You can Open console by pressing Ctrl+Shift+I shortcut or by clicking the three dots or the menu option -> more options -> developer tools.");
  log("Welcome to the Number Guessing Game! You have 10 attempts to guess the number between 1 and 100.");
  const randomNumber = getRandomNumber();
  let attempts = 0;

  while (attempts < 10) {
    const number_guessed = getPlayerGuess();

    if (number_guessed === "QUIT") {
      break;
    } else if (number_guessed === "RETRY") { 
      continue;
    }

    attempts++;
    const guessResult = checkGuess(number_guessed, randomNumber, attempts);
    
    if(guessResult.includes("Congratulations!")) {
      log(guessResult);
      return;
    } 

    log(guessResult);
  }

  if (attempts >= 10) {
    log("Game over! You ran out of attempts. The number was " + randomNumber + ".");
  }
}


game();
