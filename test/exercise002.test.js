const {
  getFillings,
  isFromManchester,
  getBusNumbers,
  countSheep,
  hasMPostCode
} = require("../challenges/exercise002");

describe("getFillings", () => {

  test("that it throws an error if sandwich is undefined", () => {
    expect(() => {
      getFillings();
    }).toThrow("ingredients is required");
  });

  test("that it throws an error if sandwich.fillings is undefined", () => {
    expect(() => {
      const sandwich = {
        bread: "Sourdough",
        accompaniment: "crisps"
      };
      getFillings(sandwich);
    }).toThrow("fillings are required");
  });

  test("returns the fillings of a sandwich", () => {
    const sandwich = {
      bread: "Sourdough",
      fillings: ["brie", "relish", "lettuce"],
      accompaniment: "crisps"
    };
    expect(getFillings(sandwich)).toEqual(["brie", "relish", "lettuce"]);

    const sandwich2 = {
      bread: "Rye",
      fillings: ["smoked salmon", "dill"],
      accompaniment: "wedges"
    };
    expect(getFillings(sandwich2)).toEqual(["smoked salmon", "dill"]);
  });
});

describe("isFromManchester", () => {

  test("that it throws an error if person is undefined", () => {
    expect(() => {
      isFromManchester();
    }).toThrow("person is required");
  });

  test("that it throws an error if person.city is undefined", () => {
    const person = {
      name: "Mohammed",
      age: 23
    };
    expect(() => {
      isFromManchester(person);
    }).toThrow("city is required");
  });

  test("returns true if the person is from Manchester", () => {
    const person = {
      name: "Mohammed",
      city: "Manchester",
      age: 23
    };
    expect(isFromManchester(person)).toBe(true);
  });

  test("returns false if the person is from Manchester-By-The-Sea", () => {
    const person = {
      name: "Brad",
      city: "Manchester-By-The-Sea",
      age: 23
    };
    expect(isFromManchester(person)).toBe(false);
  });

  test("returns false if the person is not Manchester", () => {
    const person = {
      name: "Anisa",
      city: "Leeds",
      age: 39
    };
    expect(isFromManchester(person)).toBe(false);
  });
});

describe("getBusNumbers", () => {

  test("that it throws an error if people is undefined", () => {
    expect(() => {
      getBusNumbers();
    }).toThrow("people is required");
  });

  test("that it throws an error if people is not a number", () => {
    expect(() => {
      getBusNumbers("blah");
    }).toThrow("people must be a number");
  });

  test("returns 1 if all the people fit in 1 bus", () => {
    expect(getBusNumbers(1)).toBe(1);
    expect(getBusNumbers(10)).toBe(1);
    expect(getBusNumbers(25)).toBe(1);
    expect(getBusNumbers(39)).toBe(1);
    expect(getBusNumbers(40)).toBe(1);
  });

  test("returns 2 if 2 buses are required", () => {
    expect(getBusNumbers(41)).toBe(2);
    expect(getBusNumbers(50)).toBe(2);
    expect(getBusNumbers(55)).toBe(2);
    expect(getBusNumbers(80)).toBe(2);
  });

  test("returns 3 if 3 buses are required", () => {
    expect(getBusNumbers(81)).toBe(3);
    expect(getBusNumbers(85)).toBe(3);
    expect(getBusNumbers(100)).toBe(3);
    expect(getBusNumbers(120)).toBe(3);
  });

  test("returns the correct number of buses for larger numbers of people", () => {
    expect(getBusNumbers(43728)).toBe(1094);
  });
});

describe("countSheep", () => {

  test("that it throws an error if arr is undefined", () => {
    expect(() => {
      countSheep();
    }).toThrow("arr is required")
  });

  test("returns 0 if the array is empty", () => {
    expect(countSheep([])).toBe(0);
  });

  test("returns 0 if there are 0 sheep in the array", () => {
    const arr = ["dog", "badger", "dog", "dog", "chicken"];
    expect(countSheep(arr)).toBe(0);
  });

  test("returns 1 if there is 1 sheep in the array", () => {
    const arr = ["dog", "sheep", "dog", "dog", "chicken"];
    expect(countSheep(arr)).toBe(1);
  });

  test("returns 2 if there are 2 sheep in the array", () => {
    const arr = ["dog", "sheep", "dog", "sheep", "chicken"];
    expect(countSheep(arr)).toBe(2);
  });

  test("returns 2 if there are 2 sheep in the array - case insensitive", () => {
    const arr = ["dog", "Sheep", "dog", "sheep", "chicken"];
    expect(countSheep(arr)).toBe(2);
  });

  test("returns 5 if there are 5 sheep in the array", () => {
    const arr = [
      "dog",
      "sheep",
      "dog",
      "sheep",
      "chicken",
      "sheep",
      "hare",
      "sheep",
      "sheep"
    ];
    expect(countSheep(arr)).toBe(5);
  });
});

describe("hasMPostCode", () => {

  test("that it returns an error if person is undefined", () => {
    expect(() => {
      hasMPostCode();
    }).toThrow("person is required");
  });

  test("that it returns an error if there is no postcode property", () => {
    const person = {
      name: "Mohammed",
      age: 23,
      address: {
        line1: "1a Pool Road",
        city: "Manchester"
      }
    };
    expect(() => {
      hasMPostCode(person);
    }).toThrow("a postcode property is required");
  });

  test("that it returns an error if there is no city property", () => {
    const person = {
      name: "Mohammed",
      age: 23,
      address: {
        line1: "1a Pool Road",
        postCode: "M16 8DR"
      }
    };
    expect(() => {
      hasMPostCode(person);
    }).toThrow("a city property is required");
  });

  test("returns true if the person has a postcode starting with M", () => {
    const person = {
      name: "Mohammed",
      age: 23,
      address: {
        line1: "1a Pool Road",
        city: "Manchester",
        postCode: "M16 8DR"
      }
    };
    expect(hasMPostCode(person)).toBe(true);
  });


  test("returns true if the person has a postcode starting with m - case-insensitive", () => {
    const person = {
      name: "Mohammed",
      age: 23,
      address: {
        line1: "1a Pool Road",
        city: "manchester",
        postCode: "m16 8dr"
      }
    };
    expect(hasMPostCode(person)).toBe(true);
  });

  test("returns false if the person does not have a postcode starting with M", () => {
    const person = {
      name: "Anisa",
      age: 39,
      address: {
        line1: "44 Bridge Street",
        city: "Leeds",
        postCode: "LS11 6BT"
      }
    };
    expect(hasMPostCode(person)).toBe(false);
  });

  test("returns false if the postcode starts with M but is not for Manchester", () => {
    const person = {
      name: "Jahin",
      age: 55,
      address: {
        line1: "11 Stone Street",
        city: "Maidstone",
        postCode: "ME20 5BR"
      }
    };
    expect(hasMPostCode(person)).toBe(false);
  });
});
