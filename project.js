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

deposit();

