const {
  sumDigits, createRange
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

describe("createRange", () => {

  test("that it throws an error if no number is passed in", () => {
    expect(() => {
      createRange();
    }).toThrow("start is required");
  });

  test("that it throws an error if only one number is passed in", () => {
    expect(() => {
      createRange(3);
    }).toThrow("end is required");
  });

  test("that it throws an error if only two numbers are passed in", () => {
    expect(() => {
      createRange(3, 11);
    }).toThrow("step is required");
  });

  test("that it throws an error if start is greater than end", () => {
    expect(() => {
      createRange(13, 11, 2);
    }).toThrow("start should be less than end");
  });

  test("that it throws an error if start is greater than end", () => {
    expect(() => {
      createRange(3, 11, 21);
    }).toThrow("step should be less than end");
  });
  
  test("returns an array containing a range based on numbers sent in", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]); 
  }); 

  test("returns an array containing a range based on numbers sent in even if start negative", () => {
    expect(createRange(-2, 3, 1)).toEqual([-2, -1, 0, 1, 2, 3]);
  });

  test("returns an array containing a range based on numbers sent in even if negative", () => {
    expect(createRange(-2, 3, 1)).toEqual([-2, -1, 0, 1, 2, 3]);
  });

});
