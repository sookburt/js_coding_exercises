const {
  sumDigits
} = require("../challenges/exercise007");

describe("sumDigits", () => {
  test("that it throws an error if no number is passed in", () => {
    expect(() => {
      sumDigits();
    }).toThrow("n is required");
  });

  test("that it throws an error if the string passed does not parse to a number", () => {
    expect(() => {
      sumDigits("foo")
    }).toThrow("a string containing a number is required");

    expect(() => {
      sumDigits("12foo") // a catch clause parse test on the whole string doesn't catch this.
    }).toThrow("a string containing a number is required");
  });

  test("returns the sum of the values in a string containing numbers", () => {
    expect(sumDigits("123")).toBe(6); 
  }); 

  test("returns the sum of the values in a string containing numbers even if they're all 0", () => {
    expect(sumDigits("00000000")).toBe(0); 
  });

});
