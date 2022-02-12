const findNextNumber = (nums, n) => {
  if (nums === undefined) throw new Error("nums is required");
  if (n === undefined) throw new Error("n is required");
  // TODO: return to this
};

const count1sand0s = str => {
  if (str === undefined) throw new Error("str is required");
  // Assumed only 1 or 0 in string.
  let count0 = 0;
  let count1 = 0;
  str.split('').forEach(char => {
    if(char === '0') { count0++ }
    if(char === '1') { count1++ }
  });
  return {
    1: count1,
    0: count0
  };
  // not exactly a single line arrow function... TODO: revisit?
};

const reverseNumber = n => {
  if (n === undefined) throw new Error("n is required");
  // Your code here!
  let str = n.toString();
  let arr = str.split('');
  let reversed = arr.reverse();
  return Number(reversed.join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // Your code here!
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  // Your code here!
};

const findNeedle = (haystack, searchTerm) => {
  if (haystack === undefined) throw new Error("haystack is required");
  if (searchTerm === undefined) throw new Error("searchTerm is required");
  // Your code here!
};

const getWordFrequencies = str => {
  if (str === undefined) throw new Error("str is required");
  // Your code here!
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
