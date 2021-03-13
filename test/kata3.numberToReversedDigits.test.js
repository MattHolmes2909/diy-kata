const { numberToReversedDigits } = require("../src");

describe("numberToReversedDigits", () => {
  test("returns a reversed array of the number's digits", () => {
    const arr = [1, 2, 3, 4, 5];
    const result = [5, 4, 3, 2, 1];
    const expected = numberToReversedDigits(arr);
    expect(result).toEqual(expected);
  
  });
});
