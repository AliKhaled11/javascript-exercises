const sumAll = function (start, finish) {
  let sum = 0;
  if (
    start < 0 ||
    finish < 0 ||
    !Number.isInteger(start) ||
    !Number.isInteger(finish)
  ) {
    return "ERROR";
  } else if (start < finish) {
    for (let i = start; i <= finish; i++) {
      sum += i;
    }
  } else if (start > finish) {
    for (let i = start; i >= finish; i--) {
      sum += i;
    }
  } else {
    sum = start || finish;
    return sum;
  }

  return sum;
};

// start sum = 0, loop from the first number till the last, while doing so, add the each number to the sum.

// Do not edit below this line
module.exports = sumAll;
