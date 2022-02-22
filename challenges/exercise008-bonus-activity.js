// Spread Syntax Bonus activity

/**
 * returns a list of colours
 * @param {Array} colours 
 * @return {Array}
 */
function printColours(colours) {
    if (!colours) throw new Error("colours is required");

    return [...colours];
}

/**
 * returns a list with an extra item(s) added
 * @param {Array} list 
 * @param {Array} newItem 
 */
function shoppingList(list, newItem) {
    if (!list) throw new Error("list is required");
    if (!newItem) throw new Error("newItem is required");

    return [...list, ...newItem];
}

/**
 * returns the highest number from the input array
 * @param {Array} numbers 
 * @returns {Number}
 */
function highestNumber(numbers) {
    if (!numbers) throw new Error("numbers are required");

    return Math.max(...numbers);
}

/**
 * returns a string split up into an Array
 * @param {String} string 
 * @return {Array}
 */
function splitThatString(string) {
    if (!string) throw new Error("string is required");

    return [...string];
}

/**
 * returns a users postcode or undefined if the property doesn't exist
 * @param {Object} user 
 * @return {String}
 */
function addressLookUp(user) {
    if (!user) throw new Error("user is required");

    return user.address?.postcode;
}


module.exports = {
    printColours,
    shoppingList,
    highestNumber,
    splitThatString,
    addressLookUp
};