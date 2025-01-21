// 1. Deposit some money
//2. Determine number of lines to bet on
//3. collect a bet amount
//4.spin the slot machine
//5.  check of the user won
//6. give the user their winnings
// 7. play again



const prompt = require("prompt-sync")();
const deposit = () => {
  while (true) {
    const depositAmount = prompt("Enter a deposit amount: ");
    const numberDepositAmount = parseFloat(depositAmount);

    if (isNaN(numberDepositAmount) || numberDepositAmount <= 0) {
      console.log("Invalid deposit amount, try again.")
    } else {
      return numberDepositAmount;
    }
  }
}

const getNumberOfLines = () => {
  while (true) {
    const lines = prompt("Enter the number of lines to bet on (1-3):  ");
    const numberOfLines = parseFloat(lines)

    if (isNaN(numberOfLines) || numberOfLines <= 0 || numberOfLines > 3) {
      console.log("Invalid number of lines, try again.")
    } else {
      return numberOfLines;
    }
  }
}


const getBet = (balance, lines) => {
  while (true) {
    const bet = prompt("Enter the bet per line: ");
    const numberBetAmount = parseFloat(bet);

    if (isNaN(numberBetAmount) || numberBetAmount <= 0 || numberBetAmount > balance / lines) {
      console.log("Invalid bet amount, try again.")
    } else {
      return numberBetAmount;
    }
  }
}



let balance = deposit();
const numberOfLines = getNumberOfLines();
const bet = getBet(balance, numberOfLines);

