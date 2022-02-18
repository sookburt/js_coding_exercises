/**
 * Returns the Array of sandwich fillings from the Sandwich object being passed in.
 * @param {Object} sandwich 
 * @returns {Array}
 */
function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  if (sandwich.fillings === undefined) throw new Error("fillings are required");
  return sandwich.fillings;
}

/**
 * Checks the city property of the Person object passed in to see if it is Manchester.
 * @param {Object} person 
 * @returns {Boolean}
 */
function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.city === undefined) throw new Error("city is required");

  return person.city === "Manchester";
}

/**
 * A bus can hold 40 people. This function returns how many buses are required for the number of people.
 * @param {Number} people 
 * @returns {Number}
 */
function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  if (Number.isNaN(parseInt(people, 10))) throw new Error("people must be a number");

  const passengerLimit = 40;
  return Math.ceil(people / passengerLimit);
}

/**
 * Counts the number of Sheep in the array passed in.
 * @param {Array} arr 
 * @returns {Number}
 */
function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");

  return arr.filter(animal => animal.toLowerCase() === "sheep").length;
}

/**
 * Checks if the postcode is for Manchester.
 * @param {Object} person 
 * @returns {Boolean}
 */
function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  if (person.address.postCode === undefined) throw new Error("a postcode property is required");
  if (person.address.city === undefined) throw new Error("a city property is required");

  return person.address.city.toLowerCase() === "manchester" && person.address.postCode.toLowerCase().startsWith("m")
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
