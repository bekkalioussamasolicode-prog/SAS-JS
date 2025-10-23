const books = [
  { title: "book1", author: "me1", price: 10 },
  { title: "book2", author: "me2", price: 15 },
  { title: "book3", author: "me3", price: 20 },
  { title: "book4", author: "me4", price: 25 },
  { title: "book5", author: "me5", price: 35 },
  { title: "book6", author: "me6", price: 105 },
  { title: "book7", author: "me7", price: 115 },
];
console.log(books);
const titles = books.map((books) => books.title);
console.log(titles);

const total = books.reduce((acc, book) => acc + book.price, 0);

console.log(total);

/*
let total = 0;
for (const book of books) {
  total += book.price;
}
console.log(total);
*/

const expensiveBooks = books.filter((book) => book.price > 100);
console.log(expensiveBooks);

books.push({ title: "book8", author: "me8", price: 1 });
console.log(books);
