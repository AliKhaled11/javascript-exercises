const repeatString = function (string, number) {
  let output = "";

  if (number >= 0) {
    for (let i = 0; i < number; i++) {
      output += string;
    }

    return output;
  } else {
    return "ERROR";
  }
};

console.log(repeatString("string", -1));
// Do not edit below this line
module.exports = repeatString;
