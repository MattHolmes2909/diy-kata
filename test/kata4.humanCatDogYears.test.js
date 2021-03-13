const { humanCatDogYears } = require("../src");

describe("humanCatDogYears", () => {
    it("Returns an array of zeroes if human years = 0", () => {
      const result = humanCatDogYears(0);
      const expected = [0, 0, 0];
      expect(result).toEqual(expected);
    });
    it("returns a value of 15 for cat and dog when number equals 1.", () =>{
      const result = humanCatDogYears(1);
      const expected = [1, 15, 15];  
      expect(result).toEqual(expected);
    });
    it("returns a value of 24 for cat and dog when number equals 2", () => {
      const result = humanCatDogYears(2);
      const expected = [2, 24, 24];
      expect(result).toEqual(expected);  
    });
    it("adds 4 to cat and 5 to dog when number is higher than 2.", () => {
      const result = humanCatDogYears(6);
      const expected = [6, 40, 44];
      expect(result).toEqual(expected);  
    });
});
