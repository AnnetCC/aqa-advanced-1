export class Book {

    static getOldestBook(books) {
        if (books.length === 0) {
            return null
        }
        return [...books].sort((a, b) => a._year - b._year)[0];
    }

    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }

    get name() {
        return this._name;
    }

    get author() {
        return this._author;
    }

    get year() {
        return this._year;
    }

    set name(newName) {
        this._name = typeof newName === "string" ? newName : this._name;
    }

    set author(newAuthor) {
        this._author = typeof newAuthor === "string" ? newAuthor : this._author;
    }

    set year(newYear) {
        this._year = typeof newYear === "number" && newYear <= new Date().getFullYear() && newYear > 0 ? newYear : this._year;
    }

    printInfo() {
        console.log(`This is "${this._name}", has written by ${this._author} and has published in ${this._year}.`);
    }
}

