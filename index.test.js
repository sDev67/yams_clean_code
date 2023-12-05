const { calculateDiceGameScore } = require("./game");

describe("calcul game score yams", () => {
    
  it("Should give score 0 when we didn't throw dices", () => {
    expect(calculateDiceGameScore()).toBe(0);
  });

  it("Should give score 28 when figure is corresponding to BRELAN", () => {
    expect(calculateDiceGameScore([1, 1, 1, 2, 3])).toBe(28);
  });

  it("Should give score 35 when figure is corresponding to SQUARE", () => {
    expect(calculateDiceGameScore([1, 6, 6, 6, 6])).toBe(35);
  });

  it("Should give 30 points when figure is corresponding to FULL", () => {
    expect(calculateDiceGameScore([1, 1, 1, 2, 2])).toBe(30);
  });

  it("Should give score 40 when figure is corresponding to BIG SUITE", () => {
    expect(calculateDiceGameScore([2, 3, 4, 5, 6])).toBe(40);
  });

  it("Should give score 50 when figure is corresponding to YAMS", () => {
    expect(calculateDiceGameScore([1, 1, 1, 1, 1])).toBe(50);
  });

  it("Should give sum of all dice when figure is corresponding to LUCK", () => {
    expect(calculateDiceGameScore([1, 2, 2, 3, 3])).toBe(11);
  });
});
