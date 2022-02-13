const {
  sumMultiples
  
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