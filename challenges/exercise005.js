/**
 * returns the next number in the array after the first instance of the given number or null
 * @param {Array} nums 
 * @param {Number} n 
 * @returns {Number}
 */
const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  if (Number.isNaN(parseInt(n))) throw new Error("n must be a number");
  if (nums.filter(num => Number.isNaN(parseInt(num))).length > 0) throw new Error("all values in the array should be a number");

  // TODO: return to this later - there ought to be a better way - this is rather unreadable.
  return nums.indexOf(n) > -1 ? ((nums[nums.indexOf(n)+1] !== undefined) ? nums[nums.indexOf(n)+1] : null) : null;
};

/**
 * Returns an object containing the count for the number of 1s and 0s in the incoming string.
 * @param {String} str 
 * @returns {Object}
 */
const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");

  return { "0" : str.split("").filter(n => n === '0').length, "1": str.split("").filter(n => n === '1').length };
};

/**
 * Reverses the numbers sent in and returns the number
 * @param {Number} n 
 * @returns {Number}
 */
const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  if (Number.isNaN(parseInt(n))) throw new Error("n must be a number");

  return parseInt(n.toString().split('').reverse().join(''));
};

/**
 * Takes a two dimensional array and returns the total of all numbers in the sub arrays.
 * @param {Arrays} arrs 
 * @returns {Number}
 */
const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  if ((arrs.flat().filter(n => Array.isArray(n))).length > 0) throw new Error("a 2-D array of numbers is required");
 
  return (arrs.flat()).reduce((curr, prev) => curr + prev);
};

/**
 * Returns a passed in array with the first and last items swapped.
 * @param {Array} arr 
 * @returns {Array}
 */
const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");

  if (arr.length > 1) { 
    arr.splice(1, 0, arr.pop()); 
    arr.push(arr.shift()); 
  }
  return arr;
};

/**
 * Returns true if any of the properties of the passed in object contain the specified string search term.
 * @param {Object} haystack 
 * @param {String} searchTerm 
 * @returns {Boolean}
 */
const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");

  let isFound = false;
  // eslint-disable-next-line no-unused-vars
  Object.entries(haystack).forEach(([key, value]) => typeof value == 'string' && value.toLowerCase().includes(searchTerm.toLowerCase()) ? isFound = true : null);
  return isFound;
};

/** For a group exercise.
 * Returns the maximum number of an input array.
 * @param {Array} arr 
 * @returns {Number}
 */
const getMaxNumber = arr => Math.max(...arr); 

/**
 * Returns the frequencies of each word in a string, ignoring capitalizsation
 * @param {String} str 
 * @returns {Object}
 */
const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  const processedString = str.trim().replace(/[^a-zA-Z ]/g, "").toLowerCase();
  const stringArray = processedString.split(" ");
  const wordCounts = {};

  stringArray.forEach(word => wordCounts[word] === undefined ? wordCounts[word] = 1 : wordCounts[word]++);
  return wordCounts;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies,
  getMaxNumber
};
