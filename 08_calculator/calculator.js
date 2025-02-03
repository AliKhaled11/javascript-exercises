const add = function (...numbers) {
  return numbers.reduce((a, b) => {
    return a + b;
  }, 0);
};

const subtract = function (...numbers) {
  return numbers.reduce((a, b) => {
    return a - b;
  });
};

const sum = function (arr) {
  return arr.reduce((a, b) => {
    return a + b;
  }, 0);
};

const multiply = function (arr) {
  return arr.reduce((a, b) => {
    return a * b;
  }, 1);
};

const power = function (a, b) {
  return a ** b;
};

const factorial = function (a) {
  if (a === 0) {
    return 1;
  } else if (a < 0) {
    return undefined;
  } else {
    let arr = [];
    for (let i = a; i >= 1; i--) {
      arr.push(i);
    }
    return arr.reduce((a, b) => {
      return a * b;
    });
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
