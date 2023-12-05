const { calculateDiceGameScore } = require("./game");

describe("calcul game score yams", () => {

  it("Should give score 0 when we didn't throw dices", () => {
    expect(calculateDiceGameScore()).toBe(0);
  });

});
