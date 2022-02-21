/**
 * Takes an array of numbers and squares each then returns them in an Array.
 * @param {Array} nums 
 * @returns {Array}
 */
function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  if (nums.filter(num => !Number.isInteger(num)).length > 0) throw new Error("each element of nums must be a number");

  return nums.map(n => n * n);
}

/**
 * Takes an array of words and returns them as a camel-cased concatenated String.
 * @param {Array} words 
 * @returns {String}
 */
function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");

  return words.shift().toLowerCase() + words.map(word => word.charAt(0).toUpperCase() + word.substring(1).toLowerCase()).join("");
}

/**
 * Takes an array of people objects and returns the number of subjects in the subjects property.
 * @param {Array} people 
 * @returns {Number}
 */
function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  if (people.filter(person => person.subjects === undefined).length > 0) throw new Error("people.subjects is required");
  
  return people.map(person => person.subjects.length).reduce((prev, curr) => prev + curr);
}

/**
 * Checks if the ingredient is contained in the ingredients property of any of the menu objects.
 * @param {Array} menu 
 * @param {String} ingredient 
 * @returns {Boolean}
 */
function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");
  if (menu.filter(dish => dish.ingredients === undefined).length > 0) throw new Error("menu.ingredients is required");

  return menu.filter(dish => dish.ingredients.includes(ingredient)).length > 0;
}

/**
 * Returns an array containing only the subset of numbers common to both input arrays.
 * @param {Array} arr1 
 * @param {Array} arr2 
 * @returns {Array}
 */
function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined || arr1.length < 1) throw new Error("arr1 is required");
  if (arr2 === undefined || arr2.length < 1) throw new Error("arr2 is required");

  return [...new Set(arr1.filter(num => arr2.includes(num)))].sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
