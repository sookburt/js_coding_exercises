const {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
} = require("../challenges/exercise003");

describe("getSquares", () => {

  test("that it returns an error if nums is undefined", () => {
    expect(() => {
      getSquares();
    }).toThrow("nums is required");
  });

  test("that it returns an error if an element of the array is not a number", () => {
    expect(() => {
      getSquares(["hi", 1, 2]);
      getSquares([1, "hi", 4, 2]);
      getSquares([{'hello':1}, "hi", 4, 2]);
      getSquares(1.0, 2.1);
    }).toThrow("each element of nums must be a number");
  });

  test("returns an empty array if empty array passed", () => {
    expect(getSquares([])).toEqual([]);
  });

  test("returns an empty array if empty array passed", () => {
    expect(getSquares([0,0,0])).toEqual([0,0,0]);
  });

  test("returns an array of squares of the original numbers", () => {
    expect(getSquares([2, 4, 6])).toEqual([4, 16, 36]);
    expect(getSquares([2, 4, 6, 1])).toEqual([4, 16, 36, 1]);
    expect(getSquares([2, 3, 6, 7, 12, 4])).toEqual([4, 9, 36, 49, 144, 16]);
    expect(getSquares([54, 24, 5, 66, 992])).toEqual([
      2916,
      576,
      25,
      4356,
      984064
    ]);
  });
});

describe("camelCaseWords", () => {

  test("that it throws an error if words is undefined", ()=> {
    expect(() => {
      camelCaseWords();
    }).toThrow("words is required");
  });

  test("camel cases a single word (i.e. no capital letter at beginning)", () => {
    expect(camelCaseWords(["my"])).toBe("my");
  });

  test("camel cases two words (i.e. second word is capitalized)", () => {
    expect(camelCaseWords(["my", "variable"])).toBe("myVariable");
  });

  test("camel cases two words (i.e. second word is capitalized)", () => {
    expect(camelCaseWords(["1", "variable"])).toBe("1Variable");
  });

  test("camel cases two words even if already capitalized", () => {
    expect(camelCaseWords(["my", "Variable"])).toBe("myVariable");
  });

  test("camel cases two words even if both already capitalized", () => {
    expect(camelCaseWords(["My", "Variable"])).toBe("myVariable");
    expect(camelCaseWords(["MY", "VARIABLE"])).toBe("myVariable");
  });

  test("camel cases two+ words (i.e. all words after 1st are capitalized)", () => {
    expect(camelCaseWords(["my", "variable"])).toBe("myVariable");
    expect(camelCaseWords(["my", "variable", "name"])).toBe("myVariableName");
    expect(camelCaseWords(["is", "unique"])).toBe("isUnique");
    expect(camelCaseWords(["is", "higher", "than", "min", "number"])).toBe(
      "isHigherThanMinNumber"
    );
  });
});

describe("getTotalSubjects", () => {

  test("that it throws an error if people is undefined", ()=> {
    expect(() => {
      getTotalSubjects();
    }).toThrow("people is required");
  });

  test("that it throws an error if no people have subjects", ()=> {
    expect(() => {
      const people = [
        { name: "Billy"},
        { name: "Claude"},
        { name: "Aneeta", subjects: []}
      ];     
      getTotalSubjects(people);
    }).toThrow("people.subjects is required");
  });

  test("returns 0 if no people have subjects", () => {
    const people = [
      { name: "Billy", subjects: [] },
      { name: "Claude", subjects: [] },
      { name: "Aneeta", subjects: [] }
    ];
    expect(getTotalSubjects(people)).toBe(0);
  });

  test("returns 1 if 1 person has a subject", () => {
    const people = [
      { name: "Billy", subjects: [] },
      { name: "Claude", subjects: ["chemistry"] },
      { name: "Aneeta", subjects: [] }
    ];
    expect(getTotalSubjects(people)).toBe(1);
  });

  test("returns the correct number of subjects studied in total for all people", () => {
    const people = [
      { name: "Billy", subjects: ["welsh", "spanish"] },
      { name: "Claude", subjects: ["chemistry", "biology", "music"] },
      { name: "Aneeta", subjects: ["physics", "maths", "computing", "music"] }
    ];
    expect(getTotalSubjects(people)).toBe(9);
  });
});

describe("checkIngredients", () => {

  test("that it throws an error if menu is undefined", ()=> {
    expect(() => {
      checkIngredients(undefined, "milk");
    }).toThrow("menu is required");
  });

  test("that it throws an error if ingredient is undefined", ()=> {
    expect(() => {
      const menu = [
        {
          name: "hummus",
          ingredients: ["chickpeas", "tahini", "lemon", "garlic", "salt"]
        }
      ];
      checkIngredients(menu, undefined);
    }).toThrow("ingredient is required");
  });

  test("that it throws an error if ingredients property is undefined", ()=> {
    expect(() => {
      const menu = [
        {
          name: "chocolate tiffin"
        },
        {
          name: "hummus",
          ingredients: ["chickpeas", "tahini", "lemon", "garlic", "salt"]
        }
      ];
      checkIngredients(menu, "black beans");
    }).toThrow("menu.ingredients is required");
  });

  test("returns false if no menu items include the specified ingredient", () => {
    const menu = [
      {
        name: "tofu fritters",
        ingredients: ["tofu", "egg yolk", "breadbrumbs", "paprika"]
      },
      {
        name: "black bean curry",
        ingredients: ["black beans", "garam masala", "rice"]
      },
      {
        name: "chocolate tiffin",
        ingredients: [
          "dark chocolate",
          "egg",
          "flour",
          "brown sugar",
          "vanilla essence"
        ]
      },
      {
        name: "hummus",
        ingredients: ["chickpeas", "tahini", "lemon", "garlic", "salt"]
      }
    ];

    expect(checkIngredients(menu, "milk")).toBe(false);
  });

  test("returns true if a menu item includes the specified ingredient", () => {
    const menu = [
      {
        name: "tofu fritters",
        ingredients: ["tofu", "egg yolk", "breadbrumbs", "paprika"]
      },
      {
        name: "black bean curry",
        ingredients: ["black beans", "garam masala", "rice"]
      },
      {
        name: "chocolate tiffin",
        ingredients: [
          "dark chocolate",
          "egg",
          "flour",
          "brown sugar",
          "vanilla essence"
        ]
      },
      {
        name: "hummus",
        ingredients: ["chickpeas", "tahini", "lemon", "garlic", "salt"]
      }
    ];

    expect(checkIngredients(menu, "dark chocolate")).toBe(true);
  });
});

describe("duplicateNumbers", () => {

  test("that it throws an error if the first array is undefined", () => {
      expect(() => {
        let arr2 = [55, 23, 65, 0];
        duplicateNumbers(undefined, arr2);
      }).toThrow("arr1 is required");
  });

  test("that it throws an error if the first array is undefined", () => {
    expect(() => {
      let arr1 = [1, 55, 4, 3, 7, 8];
      duplicateNumbers(arr1, undefined);
    }).toThrow("arr2 is required");
  });

  test("that it throws an error if arr1 is empty", () => {
    expect(() => {
      let arr1 = [];
      let arr2 = [1, 2, 3];
      duplicateNumbers(arr1, arr2);
    }).toThrow("arr1 is required");
  });

  test("that it throws an error if arr2 is empty", () => {
    expect(() => {
      let arr1 = [1, 2, 3];
      let arr2 = [];
      duplicateNumbers(arr1, arr2);
    }).toThrow("arr2 is required");
  });

  test("returns an array of numbers which appear in both arr1 and arr2", () => {
    let arr1 = [1, 55, 4, 3, 7, 8];
    let arr2 = [55, 23, 65, 0];
    expect(duplicateNumbers(arr1, arr2)).toEqual([55]);

    arr1 = [6, 4, 2, 4, 1, 9];
    arr2 = [1];
    expect(duplicateNumbers(arr1, arr2)).toEqual([1]);
  });

  test("returns the duplicate numbers in ascending order", () => {
    let arr1 = [1, 55, 4, 3, 7, 8];
    let arr2 = [55, 23, 65, 0, 1];
    expect(duplicateNumbers(arr1, arr2)).toEqual([1, 55]);

    arr1 = [1, 5, 88, 6, 7, 3, 2];
    arr2 = [4, 1, 7, 3, 2];
    expect(duplicateNumbers(arr1, arr2)).toEqual([1, 2, 3, 7]);
  });

  test("returns each number only once, even if it appears in one array multiple times", () => {
    let arr1 = [1, 2, 2, 2, 3, 4, 5];
    let arr2 = [1, 2, 6, 7];
    expect(duplicateNumbers(arr1, arr2)).toEqual([1, 2]);

    arr1 = [1, 2, 3];
    arr2 = [3, 3, 3, 4, 5];
    expect(duplicateNumbers(arr1, arr2)).toEqual([3]);
  });
});
