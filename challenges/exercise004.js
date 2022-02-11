function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  const processedArray = [];
  nums.forEach(function (num) {
    if (num < 1) {
      processedArray.push(num);
    }
  });
  return processedArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const filteredNames = [];
  names.forEach(function (name) {
    if (name.startsWith(char)) {
      filteredNames.push(name);
    }
  });
  return filteredNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbs = [];
  words.forEach(function (word) {
    if (word.startsWith("to ")) {
      verbs.push(word);
    }
  });
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const ints = [];
  nums.forEach(function (num) {
    if (Number.isInteger(num)) {
      ints.push(num);
    }
  });
  return ints;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  const cities = [];
  users.forEach(function (user) {
    cities.push(user.data.city.displayName);
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const squareRoots = [];
  nums.forEach(function (num) {
    squareRoots.push(+(Math.sqrt(num)).toFixed(2));
  });
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  const targetSentences = [];
  sentences.forEach(function (sentence) {
    if (sentence.toLowerCase().includes(str.toLowerCase())) {
      targetSentences.push(sentence);
    }
  });
  return targetSentences;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const longest = [];
  triangles.forEach(function (triangle) {
    longest.push(Math.max(...triangle));
  });
  return longest;
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
