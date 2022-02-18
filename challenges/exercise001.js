function capitalize(word) {
  if (word === undefined) throw new Error("word is required");

  return word.charAt(0).toLocaleUpperCase() + word.substr(1);
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");

  return `${firstName.charAt(0).toUpperCase()}.${lastName.charAt(0).toUpperCase()}`;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required");
  if (Number.isNaN(parseInt(originalPrice, 10))) throw new Error("originalPrice is not a number");
  if (Number.isNaN(parseInt(vatRate, 10))) throw new Error("vatRate is not a number");

  let amountToBeAdded = +(vatRate / 100 * originalPrice).toFixed(2);
  return (originalPrice + amountToBeAdded);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  if (Number.isNaN(parseInt(originalPrice, 10))) throw new Error("originalPrice is not a number");
  if (Number.isNaN(parseInt(reduction, 10))) throw new Error("reduction is not a number");

  let reductionAmount = +(reduction / 100 * originalPrice).toFixed(2);
  return (originalPrice - reductionAmount);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  if (str.length < 1) throw new Error("str is empty");

  let stringSize = str.length;
  if (stringSize % 2 < 1) {
    let target = stringSize / 2;
    return str.substring(target - 1, target + 1);
  }
  else {
    return str.charAt(stringSize / 2);
  }
}

function reverseWord(word) {
  if (word === undefined) throw new Error("word is required");
  if (word.length < 1) throw new Error("word is empty");

  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  if (words.length < 1) throw new Error("words is empty");

  return words.map(x => reverseWord(x));
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  if (users.length < 1) throw new Error("users is empty");

  return users.filter(x => x.type === "Linux").length;
}

function getMeanScore(scores) {
  if (scores === undefined) throw new Error("scores is required");

  const reducer = (prev, curr) => prev + curr;
  return +(scores.reduce(reducer) / scores.length).toFixed(2);

}

function simpleFizzBuzz(n) {
  if (n === undefined) throw new Error("n is required");

  let divBy3 = n % 3 === 0;
  let divBy5 = n % 5 === 0;
  if (divBy3 && divBy5) { return "fizzbuzz"; }
  if (divBy3) { return "fizz"; }
  if (divBy5) { return "buzz"; }
  return n;
}

module.exports = {
  capitalize,
  generateInitials,
  addVAT,
  getSalePrice,
  getMiddleCharacter,
  reverseWord,
  reverseAllWords,
  countLinuxUsers,
  getMeanScore,
  simpleFizzBuzz
};
