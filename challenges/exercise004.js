function findSmallNums(nums) {
  if (!nums) throw new Error("nums is required");
  
  const processedArray = [];
  for(let i = 0; i < nums.length; i++){
    if(nums[i] < 1) {
      processedArray.push(nums[i]);
    }
  }
  return processedArray;
}

function findNamesBeginningWith(names, char) {
  if (!names) throw new Error("names is required");
  if (!char) throw new Error("char is required");

  const filteredNames = [];
  for(let i = 0; i < names.length; i++){
    if(names[i].startsWith(char)) {
      filteredNames.push(names[i]);
    }
  }
  return filteredNames;
}

function findVerbs(words) {
  if (!words) throw new Error("words is required");

  const verbs = [];
  for(let i = 0; i < words.length; i++){
    if(words[i].startsWith("to ")){
      verbs.push(words[i]);
    }
  }
  return verbs;
}

function getIntegers(nums) {
  if (!nums) throw new Error("nums is required");

  const ints = [];
  for(let i = 0; i < nums.length; i++){
    if(Number.isInteger(nums[i])){
      ints.push(nums[i]);
    }
  }
  return ints;
}

function getCities(users) {
  if (!users) throw new Error("users is required");
  
  const cities = [];
  for(let i = 0; i < users.length; i++){
    cities.push(users[i].data.city.displayName);
  }
  return cities;
}

function getSquareRoots(nums) {
  if (!nums) throw new Error("nums is required");
  
  const squareRoots = [];
  for(let i = 0; i < nums.length; i++){
    squareRoots.push(+(Math.sqrt(nums[i])).toFixed(2));
  }
  return squareRoots;
}

function findSentencesContaining(sentences, str) {
  if (!sentences) throw new Error("sentences is required");
  if (!str) throw new Error("str is required");
  
  const targetSentences = [];
  for(let i = 0; i < sentences.length; i++){
    if(sentences[i].toLowerCase().includes(str.toLowerCase())){
      targetSentences.push(sentences[i]);
    }
  }
  return targetSentences;
}

function getLongestSides(triangles) {
  if (!triangles) throw new Error("triangles is required");
  
  const longest = [];
  for(let i = 0; i < triangles.length; i++){
    longest.push(Math.max(...triangles[i]));
  }
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
