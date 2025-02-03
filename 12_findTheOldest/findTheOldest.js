const findTheOldest = function (arr) {
  let arrayCopy = arr.map((person) => {
    return {
      ...person,
      age: person.yearOfDeath
        ? person.yearOfDeath - person.yearOfBirth
        : new Date().getFullYear() - person.yearOfBirth
    };
  });
  arrayCopy.sort((a, b) => {
    return a.age > b.age ? -1 : 1;
  });
  return arrayCopy[0];
};

// Do not edit below this line
module.exports = findTheOldest;
