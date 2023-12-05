const SCORE_BRELAN = 28;
const SCORE_FULL = 30;
const SCORE_SQUARE = 35;
const SCORE_BIG_SUITE = 40;
const SCORE_YAMS = 50;
const SCORE_ERROR = 0;

function isBrelan(dices) {
  const counts = {};

  for (const dice of dices) {
    if (counts[dice]) {
      counts[dice]++;
    } else {
      counts[dice] = 1;
    }
  }

  for (const count of Object.values(counts)) {
    if (count === 3) {
      return true;
    }
  }

  return false;
}

function isSquare(dices) {
  const counts = {};

  for (const dice of dices) {
    if (counts[dice]) {
      counts[dice]++;
    } else {
      counts[dice] = 1;
    }
  }
  for (const count of Object.keys(counts)) {
    if (counts[count] === 4) {
      return true;
    }
  }

  return false;
}

function isFull(dices) {
  //
}

function isBigSuite(dices) {
  //
}

function isYams(dices) {
  //
}

function isLuck(dices) {
  //
}

function calculateDiceGameScore(dices) {
  if (!dices || dices.length === 0) {
    return SCORE_ERROR;
  }

  if (isBrelan(dices)) {
    return SCORE_BRELAN;
  }

  if (isSquare(dices)) {
    return SCORE_SQUARE;
  }

  if (isFull(dices)) {
    return SCORE_FULL;
  }

  if (isBigSuite(dices)) {
    return SCORE_BIG_SUITE;
  }

  if (isYams(dices)) {
    return SCORE_YAMS;
  }

  if (isLuck(dices)) {
    return 0;
  }
}

module.exports = {
  calculateDiceGameScore,
};
