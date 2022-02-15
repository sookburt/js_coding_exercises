const {
  sumDigits, createRange, getScreentimeAlertList, hexToRGB
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

describe("getScreentimeAlertList", () => {

  let users = 
  [
   {
     username: "beth_1234",
     name: "Beth Smith",
     screenTime: [
                  { date: "2019-05-01", usage: { twitter: 34, instagram: 22, facebook: 40} },
                  { date: "2019-05-02", usage: { twitter: 56, instagram: 40, facebook: 31} },
                  { date: "2019-05-03", usage: { twitter: 12, instagram: 15, facebook: 19} },
                  { date: "2019-05-04", usage: { twitter: 10, instagram: 56, facebook: 61} },
                 ]
    },
    {
     username: "sam_j_1989",
     name: "Sam Jones",
     screenTime: [
                  { date: "2019-06-11", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10} },
                  { date: "2019-06-13", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16} },
                  { date: "2019-06-14", usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31} },
                 ]
    },
  ]

  test("throws an error if users parameter is not passed in", () => {
    expect(() => {
      getScreentimeAlertList();
    }).toThrow("users is required");
  });

  test("throws an error if date parameter is not passed in", () => {
    expect(() => {
      getScreentimeAlertList(users);
    }).toThrow("date is required");
  });

  test("throws an error if date argument does not parse to a date", () => {
    expect(() => {
      getScreentimeAlertList(users, "blah");
    }).toThrow("date is not a date");
  });

  test("returns an array of usernames given both users and a date", () => {
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
  });

});

describe("hexToRGB", () => {

  test("that if throws an error if hexString parameter is undefined", () => {
    expect(() => {
      hexToRGB();
    }).toThrow("hexStr is required");
  });

  test("that if throws an error if hexString argument is in the wrong format", () => {
    
    expect(() => {
      hexToRGB("#TT1133");
    }).toThrow("hexStr must a contain hexadecimal code");

    expect(() => {
      hexToRGB("#1133");
    }).toThrow("hexStr must a contain hexadecimal code"); 
  });

  test("that the function returns the correct rgb value for a given 6 digit hex colour", () => {
    expect(hexToRGB("#FF1133")).toBe("rgb(255,17,51)");
  });

  test("that the function returns the correct rgb value for a given 3 digit hex colour", () => {
    expect(hexToRGB("#F13")).toBe("rgb(255,17,51)");
  });

  test("that the function returns the correct rgb value for a given 6 digit hex colour, case insensitive", () => {
    expect(hexToRGB("#ff1133")).toBe("rgb(255,17,51)");
  });

  test("that the function returns the correct rgb value for a given 3 digit hex colour, case insensitive", () => {
    expect(hexToRGB("#f13")).toBe("rgb(255,17,51)");
  });

  test("that the function returns the correct rgb value even if no prefix # sent in", () => {
    expect(hexToRGB("FF1133")).toBe("rgb(255,17,51)");
  });

});