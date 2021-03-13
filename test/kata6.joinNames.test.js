const { joinNames } = require("../src");

describe("joinNames", () => {
  test("returns string of names, separated by commas and an ampersand", () => {
    const result = joinNames([
      { name: "Bart" },
      { name: "Lisa" },
      { name: "Maggie" },
    ]);
    const expected = "Bart, Lisa & Maggie";
    expect(result).toEqual(expected);
  });
  test("Returns string of any length", () => {
    const result = joinNames([
      { name: "Bart" },
      { name: "Lisa" },
      { name: "Maggie" },
      { name: "Homer" },
      { name: "Krusty" },
      { name: "Ralph" },
      { name: "Flanders" },   
    ]);
    const expected = "Bart, Lisa, Maggie, Homer, Krusty, Ralph & Flanders"
    expect(result).toEqual(expected);
    });
});
