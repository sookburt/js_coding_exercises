function capitalize(word) {
  if (word === undefined) throw new Error("word is required");
  let builder = word.charAt(0).toLocaleUpperCase() + word.substr(1);
  return builder;
}

function generateInitials(firstName, lastName) {
  if (firstName === undefined) throw new Error("firstName is required");
  if (lastName === undefined) throw new Error("lastName is required");
  // TODO: check to see if input strings contain alphabetical characters only (locale considerations?).

  /* ASSUMPTIONS: 

      - We're not required to handle input values that might consist of a compound names, such as Carrie Anne, Rees-Mogg or Bonham Carter.
      - We're not required to handle input values that might consist of 'son of' names such as O'Connor, MacDonald or McDonald
      - We're not required to handle input values that might contain a suffix, such as Jr or III .

      // TODO: consider returning to allow for some of these inputs if time later (regex?)
  */

  let initialBuilder = firstName.charAt(0).toUpperCase() + "." + lastName.charAt(0).toUpperCase();
  return initialBuilder;
}

function addVAT(originalPrice, vatRate) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (vatRate === undefined) throw new Error("vatRate is required");
  if (Number.isNaN(originalPrice)) throw new Error("originalPrice is not a number");
  if (Number.isNaN(vatRate)) throw new Error("vatRate is not a number");

  let amountToBeAdded = +(vatRate / 100 * originalPrice).toFixed(2);
  return (originalPrice + amountToBeAdded);
}

function getSalePrice(originalPrice, reduction) {
  if (originalPrice === undefined) throw new Error("originalPrice is required");
  if (reduction === undefined) throw new Error("reduction is required");
  if (Number.isNaN(originalPrice)) throw new Error("originalPrice is not a number");
  if (Number.isNaN(reduction)) throw new Error("reduction is not a number");

  let reductionAmount = +(reduction / 100 * originalPrice).toFixed(2);
  return (originalPrice - reductionAmount);
}

function getMiddleCharacter(str) {
  if (str === undefined) throw new Error("str is required");
  // Assumed any padding expected to be included.

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
  // Assumed any padding expected to be included.

  return word.split("").reverse().join("");
}

function reverseAllWords(words) {
  if (words === undefined) throw new Error("words is required");
  // Assumed any padding expected to be included.

  let returnArray = words.map(x => reverseWord(x));
  return returnArray;
}

function countLinuxUsers(users) {
  if (users === undefined) throw new Error("users is required");
  let count = 0;
  users.forEach(x => {
    if (x.type === "Linux") {
      count++;
    }
  });
  return count;
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

  if (divBy3 && divBy5) {
    return "fizzbuzz";
  }
  if (divBy3) {
    return "fizz";
  }
  if (divBy5) {
    return "buzz";
  }

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
