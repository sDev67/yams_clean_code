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

function calculateDiceGameScore(dices) {
  if (!dices || dices.length === 0) {
    return SCORE_ERROR;
  }
  
  if (isBrelan(dices)) {
    return SCORE_BRELAN;
  }

}

module.exports = {
  calculateDiceGameScore,
};
