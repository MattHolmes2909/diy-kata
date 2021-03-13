const { booleanToWord } = require("../src");

describe("booleanToWord", () => {
  it("returns a string of 'Yes' when passed a truthy value",  () => {
      expect(booleanToWord(true)).toBe('Yes');
  });

  it("returns a string of 'No' when passed a value of false", () => {
      expect(booleanToWord(false)).toBe('No');
  });
});
