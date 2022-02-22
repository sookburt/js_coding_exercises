const {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString,
    addressLookUp
} = require("../challenges/exercise008-bonus-activity");


describe("printColours", () => {

    test("that it throws an error if colours is undefined", () => {
        expect(() => {
            printColours();
        }).toThrow("colours is required");
    });

    test("returns a list of colours", () => {
        let colours = ["red", "orange", "green"];
        expect(printColours(colours)).toEqual(colours);
        colours = [];
        expect(printColours(colours)).toEqual(colours);
    });
});

describe("shoppingList", () => {

    test("that it throws an error if list is undefined", () => {
        expect(() => {
            const list = ["one apple", "two dozen organic eggs", "cucumber", "bread"];
            shoppingList(undefined, list);
        }).toThrow("list is required");
    });

    test("that it throws an error if newItem is undefined", () => {
        expect(() => {
            const list = ["one apple", "two dozen organic eggs", "cucumber", "bread"];
            shoppingList(list, undefined);
        }).toThrow("newItem is required");
    });

    test("returns a list with an extra item", () => {
        const list = ["one apple", "two dozen organic eggs", "cucumber", "bread"];
        const newItem = ["earl grey tea"]
        expect(shoppingList(list, newItem)).toEqual(["one apple", "two dozen organic eggs", "cucumber", "bread", "earl grey tea"]);
    });

    test("returns an empty list with new items added to it", () => {
        const list = [];
        const newItem = ["jelly", "melon", "pear"]
        expect(shoppingList(list, newItem)).toEqual(["jelly", "melon", "pear"]);
    });
});

describe("highestNumber", () => {

    test("that it throws an error if numbers is undefined", () => {
        expect(() => {
            highestNumber();
        }).toThrow("numbers are required");
    });

    test("returns the highest number", () => {
        const numbers = [12, 20, 18];
        expect(highestNumber(numbers)).toEqual(20);
    });
});

describe("splitThatString", () => {

    test("that it throws an error if string is undefined", () => {
        expect(() => {
            splitThatString();
        }).toThrow("string is required");
    });

    test("returns a string split up", () => {
        const string = "USA";
        expect(splitThatString(string)).toEqual(["U", "S", "A"]);
    });

    test("returns a string split up", () => {
        const string = "123";
        expect(splitThatString(string)).toEqual(["1", "2", "3"]);
    });
});

// Optional Chaining 

describe("addressLookUp", () => {
    
    test("that it throws an error if user is undefined", () => {
        expect(() => {
            addressLookUp();
        }).toThrow("user is required");
    });

    test("returns a users postcode", () => {

        const user = {
            name: 'JimBob Eggs',
            telephone: 666,
            likes: 'cheese',
            dislikes: 'dirty socks',
            address: {
                houseNumber: 'The Number of the Beast',
                postcode: 'H12 333'
            }
        }
        expect(addressLookUp(user)).toEqual('H12 333');
    });

    test("returns undefined if address isn't provided", () => {

        const user = {
            name: 'JimBob Eggs',
            telephone: 666,
            likes: 'cheese',
            dislikes: 'dirty socks',
        }
        expect(addressLookUp(user)).toEqual(undefined);
    });
});
