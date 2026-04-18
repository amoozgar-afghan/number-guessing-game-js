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
    if(confirm("Do you want to exit the game?")){
      console.log("Thanks for playing! Goodbye!");
      return "QUIT";
    } 
    return "RETRY"; 
  } 
  
  if (playerGuess.trim() === "") {
    log("You entered nothing! Please enter a whole number between 1 and 100.");
    return "RETRY";
  } else if (isNaN(playerGuess)) {
    log("Invalid input! Please enter a whole number between 1 and 100.");
    return "RETRY";
  } 

  const parsed = Number(playerGuess);

  // Reject floats explicitly
  if (!Number.isInteger(parsed) || parsed < 1 || parsed > 100) {
    log("You Entered invalid number! Please enter a whole number between 1 and 100.");
    return "RETRY";
  }

  // return the player's guess as an integer
  return parsed;
}


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