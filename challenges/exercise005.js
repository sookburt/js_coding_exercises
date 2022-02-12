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
  // TODO: refactor.
  let str = n.toString();
  let arr = str.split('');
  let reversed = arr.reverse();
  return Number(reversed.join(''));
};

const sumArrays = arrs => {
  if (arrs === undefined) throw new Error("arrs is required");
  // assume only one level of flat array depth required.
  return (arrs.flat()).reduce((curr, prev) => curr + prev);
};

const arrShift = arr => {
  if (arr === undefined) throw new Error("arr is required");
  if ( arr.length > 1 ) { 
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
  for(let key in haystack){
    let value = haystack[key];
    let checkedSearchTerm = searchTerm;
    if(typeof searchTerm === 'string' && typeof value === 'string'){
      value = value.toLowerCase();
      checkedSearchTerm = checkedSearchTerm.toLowerCase();
      if(value.includes(checkedSearchTerm)){
        return true;
      }
    }
    if(value === checkedSearchTerm){ // in case of non string values being searched for
      return true;
    }
  }
  return false;
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
