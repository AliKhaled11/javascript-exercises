const reverseString = function (string) {
  let array = [];
  let arrayReversed = [];
  let output = "";
  for (let i of string) {
    array.push(i);
  }

  while (array.length != 0) {
    arrayReversed.push(array.pop());
  }

  for (let i of arrayReversed) {
    output += i;
  }

  return output;
};

// Do not edit below this line
module.exports = reverseString;
