const { reachDestination } = require("../src");

describe("reachDestination", () => {
  it("returns string with estimated time of arrival", () => {
    const result = reachDestination(33, 5);
    const expected = "I should be there in 6.5 hours."
    expect(result).toEqual(expected);
});
});