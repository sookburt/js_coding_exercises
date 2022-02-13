const {
  sumMultiples,
  isValidDNA
} = require("../challenges/exercise006");

describe("sumMultiples", () => {
  test("returns the sum of the values in an array which are multiples of 3 or 5", () => {
    expect(sumMultiples([5, 3, 7, 15, 9, 10])).toBe(42);
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
    
  });

  test("if no values in the array are a multiple of 3 or 5, returns 0", () => {
    expect(sumMultiples([2, 7, 8, 1, 11])).toBe(0);
  });

});

describe("isValidDNA", () => {
  test("returns true if the input string contains the characters C, G, T or A only, in any order", () => {
    expect(isValidDNA("CGTA")).toBe(true);
    expect(isValidDNA("GTAC")).toBe(true);
    expect(isValidDNA("TACG")).toBe(true);
    expect(isValidDNA("ACGT")).toBe(true);    
  });

  test("if empty string return false", () => {
    expect(isValidDNA("")).toBe(0);
  });

  test("returns false if the input string contains other characters as well as C, G, T or A only", () => {
    expect(isValidDNA("ZTACG;")).toBe(false);
    expect(isValidDNA("12ACG")).toBe(false);
  });

});