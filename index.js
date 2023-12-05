const { calculateDiceGameScore } = require("./game");

const throws = [
  // we didn't throw dice
  [],
  // Brelan
  [1, 1, 1, 2, 3],
  // Square
  [1, 6, 6, 6, 6],
  // Full
  [1, 1, 1, 2, 2],
  // Big Suite
  [2, 3, 4, 5, 6],
  // Yams
  [1, 1, 1, 1, 1],
  // Luck
  [1, 2, 2, 3, 3],
];

throws.forEach((throwDice) => {
  console.log(
    `Throw is [${throwDice}] and Score is ${calculateDiceGameScore(throwDice)}`
  );
});
