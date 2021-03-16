const { ascendingArray } = require("../src");

describe("ascendingArray" , () => {
    it("returns an array of any length in ascending numerical order", () => {
        const result = ascendingArray([7, 3, 6, 34, 76, 46, 5]);
        const expected = [3, 5, 6, 7, 34, 46, 76];
        expect(result).toEqual(expected)
    });

    it("returns an array of any length in alphabetical order", () => {
        const result = ascendingArray(["f", "y", "s", "u", "a", "e", "j"]);
        const expected = ["a", "e", "f", "j", "s", "u", "y"];
        expect(result).toEqual(expected);
    })
});