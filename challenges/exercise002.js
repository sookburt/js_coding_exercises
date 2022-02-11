function getFillings(sandwich) {
  if (sandwich === undefined) throw new Error("ingredients is required");
  return sandwich.fillings;
}

function isFromManchester(person) {
  if (person === undefined) throw new Error("person is required");
  return person.city === "Manchester";
}

function getBusNumbers(people) {
  if (people === undefined) throw new Error("people is required");
  const passengerLimit = 40;
  return Math.ceil(people / passengerLimit);
}

function countSheep(arr) {
  if (arr === undefined) throw new Error("arr is required");
  const targetWord = "sheep";
  let count = 0;
  arr.forEach(animal => {
    if (animal.toLowerCase() === targetWord) {
      count++;
    }
  });
  return count;
}

function hasMPostCode(person) {
  if (person === undefined) throw new Error("person is required");
  return person.address.city === "Manchester" && person.address.postCode.startsWith("M")
}

module.exports = {
  getFillings,
  isFromManchester,
  countSheep,
  getBusNumbers,
  hasMPostCode
};
