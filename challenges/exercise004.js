/**
 * Takes an array of numbers and returns an array of numbers < 1
 * @param {Array} nums 
 * @returns {Array}
 */
function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter(num => num < 1);
}

/**
 * Filters names in the input array by those beginning with the character defined by the second parameter.
 * @param {Array} names 
 * @param {String} char 
 * @returns {Array} 
 */
function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  return names.filter(name => name.startsWith(char));
}

/**
 * Returns an array of verbs (that start with "to ") from the input array of words.
 * @param {Array} words 
 * @returns {Array}
 */
function findVerbs(words) {
  if (!words) throw new Error("words is required");

  return words.filter(word => word.startsWith("to "));
}

/**
 * From an input array of random numbers, returns only the Integers in a new array.
 * @param {Array} nums 
 * @returns {Array}
 */
function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  return nums.filter(num => Number.isInteger(num));
}

/**
 * returns an array containing the displayName of the cities for each user in the input array
 * @param {Array} users 
 * @returns {Array}
 */
function getCities(users) {
  if (!users) throw new Error("users is required");
  if (users.filter(user => user.data === undefined).length > 0) throw new Error("users.data is required");
  if (users.filter(user => user.data.city === undefined).length > 0) throw new Error("users.data.city is required");
  if (users.filter(user => user.data.city.displayName === undefined).length > 0) throw new Error("users.data.city.displayName is required");

  return users.map(user => user.data.city.displayName);
}

/**
 * Takes an array of numbers (integers) and returns an array of square roots for each number in the input array to 2 decimal places.
 * @param {Array} nums 
 * @returns {Array}
 */
function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  if (nums.filter(num => (Number.isNaN(parseInt(num)))).length > 0) throw new Error("each item must be a number");

  return nums.map(num => +(Math.sqrt(num)).toFixed(2));
}

/**
 * From an input array of sentences, we return an array of sentences matching the search keyword (str)
 * @param {Array} sentences 
 * @param {String} str 
 * @returns {Array}
 */
function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  return sentences.filter(sentence => sentence.toLowerCase().includes(str.toLowerCase()));
}

/**
 * returns an array of the longest side of each set of triangle sub-arrays
 * @param {Array} triangles 
 * @returns {Array}
 */
function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  if (triangles.length < 1) throw new Error("triangles is empty");
  if (triangles.filter(triangle => triangle.length !== 3).length > 0) throw new Error("each sub-array in triangles should contain 3 numbers");
  if (triangles.flat().filter(triangle => Number.isNaN(parseInt(triangle))).length > 0) throw new Error("each sub-array in triangles should only contain 3 numbers");

  return triangles.map(triangle => Math.max(...triangle));
}

module.exports = {
  findSmallNums,
  findNamesBeginningWith,
  findVerbs,
  getIntegers,
  getCities,
  getSquareRoots,
  findSentencesContaining,
  getLongestSides
};
