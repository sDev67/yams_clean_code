const { calculateDiceGameScore } = require("./game");

const throws = [
    [], // we didn't throw dice
];

throws.forEach(throwDice => {
    console.log(`Throw is [${throwDice}] and Score is ${calculateDiceGameScore(throwDice)}`);
});
