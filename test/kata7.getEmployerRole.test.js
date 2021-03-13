const { getEmployerRole } = require("../src");

describe("getEmployerRole", () => {
  test("returns the employee's role in the company", () => {
    const data = [
      { name: "Satti", role: "Developer" },
      { name: "Jenny", role: "Sales Associate" },
      { name: "Javid", role: "Human Recommended Reading Assistant" },
    ];
    const result = getEmployerRole("Jenny", data);
    const expected = "Sales Associate";
    expect(result).toEqual(expected);
    });
  test("Returns not found string if employee is not on system", () => {
    const data = [
      { name: "Satti", role: "Developer" },
      { name: "Jenny", role: "Sales Associate" },
      { name: "Javid", role: "Human Recommended Reading Assistant" },
    ];
    const result = getEmployerRole("Tesco", data);
    const expected = "Employee does not exist.";
    expect(result).toEqual(expected); 
  })  
});
