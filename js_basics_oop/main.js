import {Book} from "./Book.js";
import {EBook} from "./EBook.js";

// #1
const book1 = new Book("1984", "George Orwell", 1949);
const book2 = new Book("Stress, the Aging Brain, and the Mechanisms of Neuron Death", "Robert Sapolsky", 1992);
const book3 = new Book("Harry Potter and the Philosopher's Stone", "Joanne Rowling", 1997);
book1.printInfo();
book2.printInfo();
book3.printInfo();

// #2
console.log("-".repeat(20));
const ebook1 = new EBook("1984", "George Orwell", 1949, "epub");
ebook1.printInfo();

// #3 setters
console.log("-".repeat(20));
book1.name = "Harry Potter and the Prisoner of Azkaban";
book1.author = "Joanne Rowling";
book1.year = 1999;
book1.name = 78;
book2.author = {object: "value"};
book1.year = -90;
ebook1.format = "pdf"
ebook1.format = "non-existent"
book1.printInfo();
ebook1.printInfo();

// #3 getters
console.log("-".repeat(20));
console.log(`Name of the book 2 is "${book2.name}", year is ${book2.year}, author is ${book2.author}.`);
console.log(`Name of the ebook is "${ebook1.name}", year is ${ebook1.year}, author is ${ebook1.author} and format ${ebook1.format}.`);

// #4
console.log("-".repeat(20));
console.log(`The oldest book from the list is "${Book.getOldestBook([book1, book2, book3, ebook1]).name}".`);

// #5
console.log("-".repeat(20));
const ebook2 = EBook.fromBook(book3, "pdf");
ebook2.printInfo();