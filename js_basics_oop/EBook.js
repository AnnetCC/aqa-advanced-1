import {Book} from "./Book.js";

export class EBook extends Book {
    constructor(name, author, year, format) {
        super(name, author, year);
        this._format = format;
    }

    static fromBook(book, format) {
        return new EBook(book.name, book.author, book.year, format);
    }

    get format() {
        return this._format;
    }

    set format(newFormat) {
        if (newFormat.match(/epub|pdf|fb2/)) this._format = newFormat;
    }

    printInfo() {
        console.log(`This is "${this._name}", has written by ${this._author} and has published in ${this._year}. You can download it in ${this._format}.`);
    }
}