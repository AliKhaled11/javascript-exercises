const palindromes = function (string) {
  let cleanString = string.replaceAll(/[\s!,.]/g, "").toLowerCase();
  let reversedString = cleanString.split("").reverse().join("");
  console.log(reversedString);
  if (cleanString === reversedString) {
    return true;
  } else {
    return false;
  }
};

palindromes("racecar!");
// Do not edit below this line
module.exports = palindromes;
