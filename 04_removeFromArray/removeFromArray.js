const removeFromArray = function (array, ...args) {
  let arrayCopy = Array.from(array);
  for (let i = 0; i < arrayCopy.length; i++) {
    for (let j of args) {
      if (arrayCopy[i] === j) {
        arrayCopy.splice(i, 1);
        i--;
        break;
      }
    }
  }
  return arrayCopy;
};

// Do not edit below this line
module.exports = removeFromArray;
