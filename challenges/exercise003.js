function getSquares(nums) {
  if (nums === undefined) throw new Error("nums is required");
  return nums.map(n => n * n);
}

function camelCaseWords(words) {
  if (words === undefined) throw new Error("words is required");
  return words.shift() + words.map(word => word.charAt(0).toUpperCase() + word.substring(1)).join("");
}

function getTotalSubjects(people) {
  if (people === undefined) throw new Error("people is required");
  let count = 0;

  people.forEach(person => count += person.subjects.length);

  return count;
}

function checkIngredients(menu, ingredient) {
  if (menu === undefined) throw new Error("menu is required");
  if (!ingredient) throw new Error("ingredient is required");

  let ingredientExists = false;

  menu.forEach(item => {
    if (item.ingredients.includes(ingredient)) {
      ingredientExists = true;
    }
  })

  return ingredientExists;
}

function duplicateNumbers(arr1, arr2) {
  if (arr1 === undefined) throw new Error("arr1 is required");
  if (arr2 === undefined) throw new Error("arr2 is required");

  // filter first array to only those values included in second array
  // drop into a new set to remove duplicates
  // convert set to an array using ... spread operator then sort
  // readability 0 : conciseness 1  
  return [...new Set(arr1.filter(num => arr2.includes(num)))].sort();
}

module.exports = {
  getSquares,
  camelCaseWords,
  getTotalSubjects,
  checkIngredients,
  duplicateNumbers
};
