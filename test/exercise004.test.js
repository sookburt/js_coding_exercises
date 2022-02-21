const {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
} = require("../challenges/exercise004");

describe("findSmallNums", () => {

  test("that it throws an error when nums is undefined", () => {
    expect(() => {
      findSmallNums();
    }).toThrow("nums is required");
  });

  test("returns an array of numbers smaller than 1", () => {
    expect(findSmallNums([8, 1, 1.3, 0.9, 0.4, -1])).toEqual([0.9, 0.4, -1]);
    expect(findSmallNums([-7, -243])).toEqual([-7, -243]);
    expect(findSmallNums([100, 88])).toEqual([]);
    expect(findSmallNums([])).toEqual([]);
  });
});

describe("findNamesBeginningWith", () => {

  test("that it throws an error when names is undefined", () => {
    expect(() => {
      findNamesBeginningWith(undefined, "S");
    }).toThrow("names is required");
  });

  test("that it throws an error when char is undefined", () => {
    expect(() => {
      const names = ["Sally", "Dave", "Susan", "Geoff", "Riley", "Sam"];
      findNamesBeginningWith(names, undefined);
    }).toThrow("char is required");
  });

  test("returns an array of names beginning with the specified character", () => {
    const names = ["Sally", "Dave", "Susan", "Geoff", "Riley", "Sam"];
    expect(findNamesBeginningWith(names, "S")).toEqual([
      "Sally",
      "Susan",
      "Sam"
    ]);
    expect(findNamesBeginningWith(names, "D")).toEqual(["Dave"]);
    expect(findNamesBeginningWith(names, "F")).toEqual([]);
    expect(findNamesBeginningWith([], "S")).toEqual([]);
  });
});

describe("findVerbs", () => {

  test("that it throws an error when words is undefined", () => {
    expect(() => {
      findVerbs();
    }).toThrow("words is required");
  });

  test("returns an array of words that are considered verbs (because they begin with 'to ')", () => {
    const words = [
      "to eat",
      "fajita",
      "mouse",
      "to sneak",
      "to squeak",
      "cheesemonger"
    ];
    expect(findVerbs(words)).toEqual(["to eat", "to sneak", "to squeak"]);
    expect(findVerbs(["bottle", "fish", "grain"])).toEqual([]);
  });

  test("does not mistake words that include 'to' elsewhere", () => {
    const words = [
      "to eat",
      "tower",
      "monitor",
      "to sneak",
      "to squeak",
      "cheesemonger"
    ];
    expect(findVerbs(words)).toEqual(["to eat", "to sneak", "to squeak"]);
  });
});

describe("getIntegers", () => {

  test("that it throws an error when nums is undefined", () => {
    expect(() => {
      getIntegers();
    }).toThrow("nums is required");
  });

  test("returns an array containing only integers", () => {
    const nums = [1, 3.5, 2.1, 1, 4, 9];
    expect(getIntegers(nums)).toEqual([1, 1, 4, 9]);
    expect(getIntegers([])).toEqual([]);
    expect(getIntegers([4.9, 9.33, 12.4])).toEqual([]);
  });
});

describe("getCities", () => {

  test("that it throws an error when users is undefined", () => {
    expect(() => {
      getCities();
    }).toThrow("users is required");
  });

  test("that it throws an error when users.data is undefined", () => {
    expect(() => {
      const users = [
        {
          id: 12
        }
      ];
      getCities(users);
    }).toThrow("users.data is required");
  });

  test("that it throws an error when users.city is undefined", () => {
    expect(() => {
      const users = [
        {
          id: 12,
          data: {
          }
        }
      ];
      getCities(users);
    }).toThrow("users.data.city is required");
  });

  test("that it throws an error when users.data.city.displayName is undefined", () => {
    expect(() => {
      const users = [
        {
          id: 12,
          data: {
            city: {
              id: 1
            }
          }
        }
      ];
      getCities(users);
    }).toThrow("users.data.city.displayName is required");
  });

  test("returns an array of the cities of each user", () => {
    const users = [
      {
        id: 12,
        data: {
          city: {
            id: 1,
            displayName: "MCR"
          }
        }
      },
      {
        id: 44,
        data: {
          city: {
            id: 4,
            displayName: "LVP"
          }
        }
      },
      {
        id: 5,
        data: {
          city: {
            id: 4,
            displayName: "LVP"
          }
        }
      },
      {
        id: 2,
        data: {
          city: {
            id: 7,
            displayName: "GLW"
          }
        }
      }
    ];
    expect(getCities(users)).toEqual(["MCR", "LVP", "LVP", "GLW"]);
  });
});

describe("getSquareRoots", () => {

  test("that it throws an error when nums is undefined", () => {
    expect(() => {
      getSquareRoots();
    }).toThrow("nums is required");
  });

  test("that it throws an error if any item in the input array is not a number", () => {
    expect(() => {
      let nums = [1, 2, "fluffy"];
      getSquareRoots(nums);
      nums = [1, 2, 5.2];
      getSquareRoots(nums);
    }).toThrow("each item must be a number");
  });

  test("gets the square root of each number to 2 decimal places", () => {
    const nums = [36, 77, 12, 355, 92, 5];
    expect(getSquareRoots(nums)).toEqual([6, 8.77, 3.46, 18.84, 9.59, 2.24]);
  });
});

describe("findSentencesContaining", () => {

  test("that it throws an error when sentences is undefined", () => {
    expect(() => {
      findSentencesContaining(undefined, "hello");
    }).toThrow("sentences is required");
  });

  test("that it throws an error when str is undefined", () => {
    expect(() => {
      findSentencesContaining(["Hello, how are you", "I'm good thanks!"], undefined);
    }).toThrow("str is required");
  });

  const sentencesAboutPackageJson = [
    "You should specify a license for your package so that people know how they are permitted to use it",
    "The main field is a module ID that is the primary entry point to your program",
    "The repository field should specify the place where your code lives",
    "The 'scripts' property is a dictionary containing script commands that are run at various times in the lifecycle of your package",
    "Dependencies are specified in a simple object that maps a package name to a version range",
    "It's best to map these additional items such as a test framework, which is not needed for running your project, in a devDependencies object",
    "If you plan to publish your package, the most important things in your package.json are the name and version fields as they will be required",
    "If you don’t plan to publish your package, the name and version fields are optional",
    "Put keywords in it. It's an array of strings. This helps people discover your package as it's listed in npm search",
    "The bugs field should hold the url to your project’s issue tracker and / or the email address to which issues should be reported."
  ];

  test("returns only the sentences containing the specified string", () => {
    expect(
      findSentencesContaining(sentencesAboutPackageJson, "license")
    ).toEqual([
      "You should specify a license for your package so that people know how they are permitted to use it"
    ]);

    expect(
      findSentencesContaining(sentencesAboutPackageJson, "binary")
    ).toEqual([]);
  });

  test("it should not be case sensitive", () => {
    expect(
      findSentencesContaining(sentencesAboutPackageJson, "dependencies")
    ).toEqual([
      "Dependencies are specified in a simple object that maps a package name to a version range",
      "It's best to map these additional items such as a test framework, which is not needed for running your project, in a devDependencies object"
    ]);
  });
});

describe("getLongestSides", () => {

  test("that it throws an error when triangles is undefined", () => {
    expect(() => {
      getLongestSides();
    }).toThrow("triangles is required");
  });

  test("that it throws an error when triangles is empty", () => {
    expect(() => {
      getLongestSides([]);
    }).toThrow("triangles is empty");
  });

  test("that it throws an error when any of the sub-arrays do not contain 3 numbers", () => {
    expect(() => {
      getLongestSides([[], [1, 2, 3]]);
      getLongestSides([[1, 2, 3, 4, 5], [1, 2, 3]]);
    }).toThrow("each sub-array in triangles should contain 3 numbers");
  });

  test("that it throws an error when any of the sub-arrays contain non numbers", () => {
    expect(() => {
      getLongestSides([["fluffy", 2, 3], [1, 2, 3]]);
      getLongestSides([[1, 2, "fluffy"], [1, 2, 3]]);
    }).toThrow("each sub-array in triangles should only contain 3 numbers");
  });

  test("returns the longest side of each set of triangle data", () => {
    const data = [[6, 7, 10], [9, 3, 6], [6, 3, 5], [6, 13, 12], [7, 12, 8]];
    expect(getLongestSides(data)).toEqual([10, 9, 6, 13, 12]);

    const data2 = [[6, 7, 7], [9, 3, 9], [6, 3, 5], [6, 13, 12], [7, 12, 8]];
    expect(getLongestSides(data2)).toEqual([7, 9, 6, 13, 12]);
  });
});
