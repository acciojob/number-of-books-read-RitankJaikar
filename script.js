const library = [
  {
    author: "Bill Gates",
    title: "The Road Ahead",
    readingStatus: true,
  },
  {
    author: "Steve Jobs",
    title: "Walter Isaacson",
    readingStatus: true,
  },
  {
    author: "Suzanne Collins",
    title: "Mockingjay: The Final Book of The Hunger Games",
    readingStatus: false,
  },
];

const numberOfBooksRead = () => {
  // Use the filter method to filter books with readingStatus === true and count them
  return library.filter(book => book.readingStatus).length;
};

// Do not change the code below
console.log(numberOfBooksRead()); // Output: 2
