const SCORE = {
  BRELAN: 28,
  FULL: 30,
  SQUARE: 35,
  BIG_SUITE: 40,
  YAMS: 50,
  ERROR: 0,
};

function getDicesCount(dices) {
  const counts = {};

  for (const dice of dices) {
    if (counts[dice]) {
      counts[dice]++;
    } else {
      counts[dice] = 1;
    }
  }

  return counts;
}

function isBrelan(dices) {
  const counts = getDicesCount(dices);

  for (const count of Object.values(counts)) {
    if (count === 3) {
      return true;
    }
  }

  return false;
}

function isSquare(dices) {
  const counts = getDicesCount(dices);
  for (const count of Object.keys(counts)) {
    if (counts[count] === 4) {
      return true;
    }
  }

  return false;
}

function isFull(dices) {
  const counts = getDicesCount(dices);
  return Object.values(counts).includes(3) && Object.values(counts).includes(2);
}

function isBigSuite(dices) {

    const sortedDices = dices.sort();
    const firstDice = sortedDices[0];
    console.log("firstDice", firstDice);
    for (let i = 1; i < sortedDices.length; i++) {
        if (sortedDices[i] !== firstDice + i) {
            return false;
        }
    }
    return true;
}

function isYams(dices) {
  let allSameDices = true;
  for (let i = 1; i < dices.length; i++) {
    if (dices[i] !== dices[0]) {
      allSameDices = false;
      break;
    }
  }
  return allSameDices;
}

function calculateDiceGameScore(dices) {
  if (!dices || dices.length === 0) {
    return SCORE.ERROR;
  }

  if (isSquare(dices)) {
    return SCORE.SQUARE;
  }

  if (isFull(dices)) {
    return SCORE.FULL;
  }

  if (isBrelan(dices)) {
    return SCORE.BRELAN;
  }

  if (isBigSuite(dices)) {
    return SCORE.BIG_SUITE;
  }

  if (isYams(dices)) {
    return SCORE.YAMS;
  }

  // if none of previous case match we are in luck case
  let sum = 0;
  for (const dice of dices) {
    sum += dice;
  }

  return sum;
}

module.exports = {
  calculateDiceGameScore,
  SCORE,
};
