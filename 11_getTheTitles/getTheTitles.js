const getTheTitles = function (obj) {
  return obj.map((item) => {
    return item.title;
  });
};

const books = [
  {
    title: "Book",
    author: "Name"
  },
  {
    title: "Book2",
    author: "Name2"
  }
];

console.log(getTheTitles(books));

// Do not edit below this line
module.exports = getTheTitles;
