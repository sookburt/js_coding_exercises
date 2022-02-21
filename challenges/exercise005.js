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
  //if ((arrs.flat().filter(n => Number.isNaN(parseInt(n)))).length > 0) throw new Error("a 2-D array of numbers is required");

  // TO HERE: parseInt doesn't handle an array quite how you might expect parseInt([2, 4]) === 2 rather than NaN...
  
  return (arrs.flat()).reduce((curr, prev) => curr + prev);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if (arr.length > 1) {
    let toFront = arr.pop();
    let toEnd = arr.shift();
    arr.unshift(toFront);
    arr.push(toEnd);
  }
  return arr;
  // TODO: refactor?
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // assume not nested objects (otherwise recursion?)

  // 🤢  TODO: refactor...
  for (let key in haystack) {
    let value = haystack[key];
    let checkedSearchTerm = searchTerm;
    if (typeof searchTerm === 'string' && typeof value === 'string') {
      value = value.toLowerCase();
      checkedSearchTerm = checkedSearchTerm.toLowerCase();
      if (value.includes(checkedSearchTerm)) {
        return true;
      }
    }
    if (value === checkedSearchTerm) { // in case of non string values being searched for
      return true;
    }
  }
  return false;
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");

  // remove punctuation and padding and ensure all lowercase.
  const processedString = str.trim().replace(/[.,/#!$%^&*;:{}=\-_`~()?]/g, "").toLowerCase();
  const stringArray = processedString.split(" ");
  const wordCounts = {};

  stringArray.forEach(word => {
    if (wordCounts[word] === undefined) {
      wordCounts[word] = 1;
    }
    else {
      wordCounts[word] += 1;
    }
  });
  return wordCounts;
};

module.exports = {
  findNextNumber,
  count1sand0s,
  reverseNumber,
  sumArrays,
  arrShift,
  findNeedle,
  getWordFrequencies
};
