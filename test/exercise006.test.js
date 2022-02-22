const {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
} = require("../challenges/exercise006");

describe("sumMultiples", () => {

  test("that it throws an error when arr is undefined", () => {
    expect(() => {
      sumMultiples();
    }).toThrow("arr is required");
  });

  test("returns the sum of the values in an array which are multiples of 3 or 5", () => {
    expect(sumMultiples([5, 3, 7, 15, 9, 10])).toBe(42);
    expect(sumMultiples([5, 3, 7, 8, 1, 10])).toBe(18);
  });

  test("if no values in the array are a multiple of 3 or 5, returns 0", () => {
    expect(sumMultiples([2, 7, 8, 1, 11])).toBe(0);
    expect(sumMultiples([0, 0, 0, 0, 0, 0])).toBe(0);
  });

});

describe("isValidDNA", () => {

  test("that it throws an error when str is undefined", () => {
    expect(() => {
      isValidDNA();
    }).toThrow("str is required");
  });

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
    expect(isValidDNA("ACTTGACC")).toBe(true); // assumed longer strings are also valid
    expect(isValidDNA("acgt")).toBe(false);
  });

  test("returns false if the input string contains other characters as well as C, G, T or A only", () => {
    expect(isValidDNA("ZTACG;")).toBe(false);
    expect(isValidDNA("12345")).toBe(false);
    expect(isValidDNA("ZACG;")).toBe(false);
    expect(isValidDNA("12ACG")).toBe(false);
  });

});

describe("getComplementaryDNA", () => {

  test("that it throws an error when str is undefined", () => {
    expect(() => {
      getComplementaryDNA();
    }).toThrow("str is required");
  });

  test("that it throws an error when str is invalid", () => {
    expect(() => {
      getComplementaryDNA("GATE");
      getComplementaryDNA("gtac");
      getComplementaryDNA("");
    }).toThrow("str is not a valid DNA sequence");
  });


  test("returns complementary base pair sequence for any given valid DNA string", () => {
    expect(getComplementaryDNA("CTGA")).toBe("GACT");
    expect(getComplementaryDNA("GTAC")).toBe("CATG");
    expect(getComplementaryDNA("TACG")).toBe("ATGC");
    expect(getComplementaryDNA("ACGT")).toBe("TGCA");
  });

});

describe("isItPrime", () => {

  test("that it throws an error when n is undefined", () => {
    expect(() => {
      isItPrime();
    }).toThrow("n is required");
  });

  test("returns true if the incoming number is a prime number", () => {
    expect(isItPrime(7)).toBe(true);
    expect(isItPrime(1117)).toBe(true);
    expect(isItPrime(15073)).toBe(true);
  });

  test("returns false if the incoming number is not a prime number", () => {
    expect(isItPrime(9)).toBe(false);
    expect(isItPrime(27)).toBe(false);
  });

  test("returns false if the incoming number is less than 2", () => {
    expect(isItPrime(1)).toBe(false);
    expect(isItPrime(2)).toBe(true);
  });

  test("returns false if the incoming number is negative", () => {
    expect(isItPrime(-7)).toBe(false);
  });

});

describe("createMatrix", () => {

  test("that it throws an error when n is undefined", () => {
    expect(() => {
      createMatrix(undefined, "fluffy");
    }).toThrow("n is required");
  });

  test("that it throws an error when fill is undefined", () => {
    expect(() => {
      createMatrix(3, undefined);
    }).toThrow("fill is required");
  });

  test("returns an array of n arrays filled with the string in the 2nd parameter", () => {
    expect(createMatrix(3, "foo")).toEqual(
      [
        ['foo', 'foo', 'foo'],
        ['foo', 'foo', 'foo'],
        ['foo', 'foo', 'foo']
      ]
    );
    expect(createMatrix(5, "Entertaining!")).toEqual(
      [
        ["Entertaining!", "Entertaining!", "Entertaining!", "Entertaining!", "Entertaining!"],
        ["Entertaining!", "Entertaining!", "Entertaining!", "Entertaining!", "Entertaining!"],
        ["Entertaining!", "Entertaining!", "Entertaining!", "Entertaining!", "Entertaining!"],
        ["Entertaining!", "Entertaining!", "Entertaining!", "Entertaining!", "Entertaining!"],
        ["Entertaining!", "Entertaining!", "Entertaining!", "Entertaining!", "Entertaining!"]
      ]
    );
  });

});

describe("areWeCovered", () => {

  test("that it throws an error when day is undefined", () => {
    expect(() => {
      areWeCovered([{ name: "Sally", rota: ["Monday"] }], undefined);
    }).toThrow("day is required");
  });

  test("that it throws an error when staff is undefined", () => {
    expect(() => {
      areWeCovered(undefined, "Saturday");
    }).toThrow("staff is required");
  });

  test("returns true/false if at least 3 staff members are present on the given day", () => {
    let staff =
      [
        { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
        { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
        { name: "Andy", rota: ["Saturday", "Sunday", "Thursday", "Friday"] },
        { name: "Tessa", rota: ["Saturday", "Sunday", "Wednesday", "Friday"] },
        { name: "Vero", rota: ["Saturday", "Sunday", "Monday", "Wednesday"] },
        { name: "Keith", rota: ["Saturday", "Monday", "Wednesday"] },
      ];
    expect(areWeCovered(staff, "Saturday")).toBe(true);
    expect(areWeCovered(staff, "Tuesday")).toBe(false);
  });

});