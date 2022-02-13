/**
 * This function will receive an array of numbers and should return the sum
 * of any numbers which are a multiple of 3 or 5
 * @param {Array} arr
 * @returns {Number}
 */
const sumMultiples = arr => {
  if (arr === undefined) throw new Error("arr is required");
  let sum = 0;
  arr.forEach(num => (num % 3 === 0 || num % 5 === 0) ? sum += num : sum += 0);
  return sum;
};

/**
 * This function will receive a string of characters and should return true/false depending on whether it is a valid DNA string. A valid DNA string may contain characters C, G, T or A only.
 * @param {String} str
 * @returns {Boolean}
 */
const isValidDNA = str => {
  if (str === undefined) throw new Error("str is required");
  if (str.length < 1) { return false; }
  const dnaArray = ["G", "T", "A", "C"];
  // reduce the values to iterate over. 
  let reducedString = [...new Set(str)];
  for (let i = 0; i < reducedString.length; i++) {
    if (!dnaArray.includes(reducedString[i])) {
      return false;
    }
  }
  return true;
};

/**
 * This function will receive a valid DNA string (see above) and should return a string of the complementary base pairs. In DNA, T always pairs with A, and C always pairs with G. So a string of "ACTG" would have a complementary DNA string of "TGAC".
 * @param {String} str
 * @returns {String}
 */
const getComplementaryDNA = str => {
  if (str === undefined) throw new Error("str is required");
  // is a map overkill for this situation?
  const pairs = new Map();
  pairs.set("A", "T");
  pairs.set("T", "A");
  pairs.set("C", "G");
  pairs.set("G", "C");

  return str.split("").map(char => pairs.get(char)).join("");
};

/**
 * This function should receive a number and return true/false depending on whether it is a prime number or not. A prime number is a number that can only be divided evenly by 1 and itself (for example, 7)
 * @param {Number} n
 * @returns {Boolean}
 */
const isItPrime = n => {
  if (n === undefined) throw new Error("n is required");
  if (n <= 2) { return false; }

  let sqrt = Math.sqrt(n); // more performant to use sqrt.

  for (let factor = 2; factor <= sqrt; factor++) {
    if (n % factor === 0) {
      return false;
    }
  }
  return true;
};

/**
 * This function should receive a number and return an array of n arrays, each filled with n items. The parameter "fill" should be used as the filler of the arrays. For example, given parameters 3 and "foo" the resulting matrix should be:
 * [
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"],
 *   ["foo", "foo", "foo"]
 * ]
 * @param {Number} n
 * @param {Any} fill
 * @returns {Array}
 */
const createMatrix = (n, fill) => {
  if (n === undefined) throw new Error("n is required");
  if (fill === undefined) throw new Error("fill is required");

  let outgoingArray = [];
  for (let outer = 0; outer < n; outer++) {
    let innerArray = [];
    for (let inner = 0; inner < n; inner++) {
      innerArray.push(fill);
    }
    outgoingArray.push(innerArray);
  }
  return outgoingArray;
};

/**
 * This function takes an array of staff objects in the format:
 * [
 *  { name: "Sally", rota: ["Monday", "Tuesday", "Friday"] },
 *  { name: "Pedro", rota: ["Saturday", "Sunday", "Tuesday", "Wednesday"] },
 *  ...etc
 * ]
 * and a day of the week. For the café to run successfully, at least 3 staff members are required per day. The function should return true/false depending on whether there are enough staff scheduled for the given day.
 * @param {Array} staff
 * @param {String} day
 * @returns {Boolean}
 */
const areWeCovered = (staff, day) => {
  if (staff === undefined) throw new Error("staff is required");
  if (day === undefined) throw new Error("day is required");

  let count = 0;

  staff.forEach(person => {
    if (person.rota.includes(day)) {
      count += 1;
    }
  })

  return count > 2;
};

module.exports = {
  sumMultiples,
  isValidDNA,
  getComplementaryDNA,
  isItPrime,
  createMatrix,
  areWeCovered
};
