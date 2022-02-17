const {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
} = require("../challenges/exercise001");

describe("capitalize", () => {

  test("that it throws an error if word parameter is undefined", () => {
    expect(() => {
      capitalize();
    }).toThrow("word is required");
  });

  test("returns a capitalized string", () => {
    expect(capitalize("hello")).toBe("Hello");
    expect(capitalize("the quick fox")).toBe("The quick fox");
    expect(capitalize("oh no, bears!!!")).toBe("Oh no, bears!!!");
  });

  test("does nothing if the string is already capitalized", () => {
    expect(capitalize("Hello")).toBe("Hello");
  });

  test("does nothing if the string is empty", () => {
    expect(capitalize("")).toBe("");
  });
});

describe("generateInitials", () => {

  test("that it throws an error if firstName argument is undefined", () => {
    expect(() => {
      generateInitials(undefined, "Bonneville");
    }).toThrow("firstName is required");
  });

  test("that it throws an error if lastName argument is undefined", () => {
    expect(() => {
      generateInitials("Frederic", undefined);
    }).toThrow("lastName is required");
  });

  test("returns the initials of a firstname and surname", () => {
    expect(generateInitials("Frederic", "Bonneville")).toBe("F.B");
    expect(generateInitials("Tommy", "O'Connor")).toBe("T.O");
    expect(generateInitials("Helena", "Bonham Carter")).toBe("H.B");

  });
});

describe("addVAT", () => {

  test("that it throws an error if originalPrice argument is undefined", () => {
    expect(() => {
      addVAT(undefined, 20);
    }).toThrow("originalPrice is required");
  });

  test("that it throws an error if vatRate argument is undefined", () => {
    expect(() => {
      addVAT(100, undefined);
    }).toThrow("vatRate is required");
  });

  test("that it throws an error if originalPrice is not a number", () => {
    expect(() => {
      addVAT("hello", 20);
    }).toThrow("originalPrice is not a number");
  });

  test("that it throws an error if vatRate is not a number", () => {
    expect(() => {
      addVAT(100, "hello");
    }).toThrow("vatRate is not a number");
  });

  test("adds a VAT of 20% to a price of 100", () => {
    expect(addVAT(100, 20)).toBe(120);
  });

  test("adds a VAT of 17.5% to a price of 40", () => {
    expect(addVAT(40, 17.5)).toBe(47);
  });

  test("adds a VAT of 17.5% to a price of 33.50", () => {
    expect(addVAT(33.5, 17.5)).toBe(39.36);
  });

  test("adds a VAT of 0% to a price of 25", () => {
    expect(addVAT(25, 0)).toBe(25);
  });
  
  test("adds a VAT of 0% to a price of 0", () => {
    expect(addVAT(0, 0)).toBe(0);
  });
});

describe("getSalePrice", () => {

  test("that it throws an error if originalPrice argument is undefined", () => {
    expect(() => {
      getSalePrice(undefined, 20);
    }).toThrow("originalPrice is required");
  });

  test("that it throws an error if reduction argument is undefined", () => {
    expect(() => {
      getSalePrice(100, undefined);
    }).toThrow("reduction is required");
  });

  test("that it throws an error if originalPrice is not a number", () => {
    expect(() => {
      getSalePrice("hello", 20);
    }).toThrow("originalPrice is not a number");
  });

  test("that it throws an error if reduction is not a number", () => {
    expect(() => {
      getSalePrice(100, "hello");
    }).toThrow("reduction is not a number");
  });

  test("reduces a price of 100 by 50%", () => {
    expect(getSalePrice(100, 50)).toBe(50);
  });

  test("reduces a price of 100 by 33.3%", () => {
    expect(getSalePrice(100, 33.3)).toBe(66.7);
  });

  test("reduces a price of 79.99 by 15%", () => {
    expect(getSalePrice(79.99, 15)).toBe(67.99);
  });

  test("reduces a price of 50 by 0%", () => {
    expect(getSalePrice(50, 0)).toBe(50);
  });
  
  test("does nothing if the original price and reduction are both 0", () => {
    expect(getSalePrice(0, 0)).toBe(0);
  });
});

describe("getMiddleCharacter", () => {

  test("that it throws an error if str argument is undefined", () => {
    expect(() => {
      getMiddleCharacter();
    }).toThrow("str is required");
  });

  test("that it throws an error if str argument is empty", () => {
    expect(() => {
      getMiddleCharacter("");
    }).toThrow("str is empty");
  });

  test("returns the middle character from a string of odd length", () => {
    expect(getMiddleCharacter("bears!!!!")).toBe("s");
  });

  test("returns the middle character from a string of odd length including padding", () => {
    expect(getMiddleCharacter(" bears!!!! ")).toBe("s");
  });

  test("returns the middle 2 characters from a string of even length", () => {
    expect(getMiddleCharacter("help!!")).toBe("lp");
  });
  
  test("returns the middle 2 characters from a string of even length including padding", () => {
    expect(getMiddleCharacter(" help!! ")).toBe("lp");
  });

  test("returns the middle character from a string of odd length with only 1 character", () => {
    expect(getMiddleCharacter("s")).toBe("s");
  });

  test("returns the middle 2 characters from a string of even length of only two characters", () => {
    expect(getMiddleCharacter("lp")).toBe("lp");
  });
});

describe("reverseWord", () => {

  test("that it throws an error if word argument is undefined", () => {
    expect(() => {
      reverseWord();
    }).toThrow("word is required");
  });

  test("that it throws an error if word argument is empty", () => {
    expect(() => {
      reverseWord("");
    }).toThrow("word is empty");
  });

  test("returns the provided word, reversed", () => {
    expect(reverseWord("foo")).toBe("oof");
  });

  test("returns a longer sentence, reversed", () => {
    expect(reverseWord("why would you even want to do this?")).toBe(
      "?siht od ot tnaw neve uoy dluow yhw"
    );
  });

  test("returns a single character if a single character was sent in.", () => {
    expect(reverseWord("f")).toBe("f");
  });

});


describe("reverseAllWords", () => {

  test("that it throws an error if words argument is undefined", () => {
    expect(() => {
      reverseAllWords();
    }).toThrow("words is required");
  });

  test("that it throws an error if worsd argument is empty", () => {
    expect(() => {
      reverseAllWords("");
    }).toThrow("words is empty");
  });

  test("reverses a single word in an array", () => {
    expect(reverseAllWords(["jest"])).toEqual(["tsej"]);
  });

  test("reverses a single word in an array with padding", () => {
    expect(reverseAllWords([" jest "])).toEqual([" tsej "]);
  });

  test("reverses a multiple words in an array", () => {
    expect(
      reverseAllWords(["jest", "mocha", "rspec", "jasmine", "selenium"])
    ).toEqual(["tsej", "ahcom", "cepsr", "enimsaj", "muineles"]);
  });

  test("reverses a multiple words in an array with padding", () => {
    expect(
      reverseAllWords(["jest", " mocha ", "rspec", "jasmine", " selenium "])
    ).toEqual(["tsej", " ahcom ", "cepsr", "enimsaj", " muineles "]);
  });

});

describe("countLinuxUsers", () => {

  test("that it throws an error if users argument is undefined", () => {
    expect(() => {
      countLinuxUsers();
    }).toThrow("users is required");
  });

  test("that it throws an error if users argument is empty", () => {
    expect(() => {
      countLinuxUsers([]);
    }).toThrow("users is empty");
  });

  test("returns 0 if no Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Windows 8", type: "Windows" },
      { name: "Paul", OS: "Firefox OS", type: "Unknown" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" }
    ];
    expect(countLinuxUsers(users)).toBe(0);
  });

  test("returns 0 if no type property was found", () => {
    const users = [
      { name: "Heather", OS: "Windows 8", hello: "Windows" },
      { name: "Paul", OS: "Firefox OS", hello: "Unknown" },
      { name: "Sheila", OS: "Windows 10", hello: "Windows" },
      { name: "Pedro", OS: "Windows 95", hello: "Windows" }
    ];
    expect(countLinuxUsers(users)).toBe(0);
  });

  test("returns the correct number of Linux users found", () => {
    const users = [
      { name: "Heather", OS: "Ubuntu 18.04", type: "Linux" },
      { name: "Paul", OS: "Ubuntu 16.04", type: "Linux" },
      { name: "Sheila", OS: "Windows 10", type: "Windows" },
      { name: "Jane", OS: "Mint 19.1", type: "Linux" },
      { name: "Jen", OS: "CentOS 7", type: "Linux" },
      { name: "David", OS: "Fedora 28", type: "Linux" },
      { name: "Pedro", OS: "Windows 95", type: "Windows" }
    ];
    expect(countLinuxUsers(users)).toBe(5);
  });
});

describe("getMeanScore", () => {

  test("that it throws an error if scores argument is undefined", () => {
    expect(() => {
      getMeanScore();
    }).toThrow("scores is required");
  });

  test("returns the mean score from an array of scores", () => {
    expect(getMeanScore([8, 9, 7])).toBe(8);
    expect(getMeanScore([88, 86, 93])).toBe(89);
    expect(getMeanScore([88, 88])).toBe(88);
  });

  test("returns the mean to 2 decimal places", () => {
    expect(getMeanScore([24, 44, 56, 11, 12, 17, 34])).toBe(28.29);
  });

});

describe("simpleFizzBuzz", () => {

  test("that it throws an error if n argument is undefined", () => {
    expect(() => {
      simpleFizzBuzz();
    }).toThrow("n is required");
  });

  test("returns 'fizz' if the number is divisible by 3", () => {
    expect(simpleFizzBuzz(3)).toBe("fizz");
  });

  test("returns 'buzz' if the number is divisible by 5", () => {
    expect(simpleFizzBuzz(5)).toBe("buzz");
  });

  test("returns the number if the number is divisible by neither 3 nor 5", () => {
    expect(simpleFizzBuzz(4)).toBe(4);
  });

  test("returns 'fizzbuzz' if the number is divisible by 3 and 5", () => {
    expect(simpleFizzBuzz(15)).toBe("fizzbuzz");
  });
  
});
