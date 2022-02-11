function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");

  const processedArray = nums.filter(function (num) {
    if (num < 1) {
      return num;
    }
  });
  return processedArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const filteredNames = names.filter(function (name) {
    if (name.startsWith(char)) {
      return name;
    }
  });
  return filteredNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbs = words.filter(function (word) {
    if (word.startsWith("to ")) {
      return word;
    }
  });
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const ints = nums.filter(function (num) {
    if (Number.isInteger(num)) {
      return num;
    }
  });
  return ints;
}

function getCities(users) {
  if (!users) throw new Error("users is required");

  const cities = users.map(function (user) {
    return user.data.city.displayName;
  });
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");

  const squareRoots = nums.map(function (num) {
    return +(Math.sqrt(num)).toFixed(2);
  });
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");

  const targetSentences = sentences.filter(function (sentence) {
    if (sentence.toLowerCase().includes(str.toLowerCase())) {
      return sentence;
    }
  });
  return targetSentences;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");

  const longest = triangles.map(function (triangle) {
    return Math.max(...triangle);
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
