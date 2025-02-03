const fibonacci = function (a) {
  if (a < 0) {
    return "OOPS";
  }
  let fibList = [0, 1];
  for (let i = 0; i <= 100; i++) {
    fibList.push(fibList.at(-1) + fibList.at(-2));
  }
  return fibList[a];
};

// Do not edit below this line
module.exports = fibonacci;
