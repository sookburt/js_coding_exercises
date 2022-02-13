const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA
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
    expect(isValidDNA("")).toBe(false);
  });

  test("returns true only if characters G, C, T or A are uppercase", () => {
    expect(isValidDNA("ACGT")).toBe(true); 
    expect(isValidDNA("acgt")).toBe(false); 
  });

  test("returns false if the input string contains other characters as well as C, G, T or A only", () => {
    expect(isValidDNA("ZTACG;")).toBe(false);
    expect(isValidDNA("12ACG")).toBe(false);
  });

});

describe("getComplementaryDNA", () => {
  test("returns complementary base pair sequence for any given valid DNA string", () => {
    expect(getComplementaryDNA("CTGA")).toBe("GACT");
    expect(getComplementaryDNA("GTAC")).toBe("CATG");
    expect(getComplementaryDNA("TACG")).toBe("ATGC");
    expect(getComplementaryDNA("ACGT")).toBe("TGCA");   
  });

});

describe("isItPrime", () => {
  test("returns true if the incoming number is a prime number", () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(1117)).toBe(true); 
    expect(isItPrime(15073)).toBe(true);
  });

  test("returns false if the incoming number is not a prime number", () => {
    expect(isItPrime(9)).toBe(false);
    expect(isItPrime(27)).toBe(false); 
  });

  test("returns false if the incoming number is negative", () => {
    expect(isItPrime(-7)).toBe(false);
  });

});
