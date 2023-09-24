export class Book {
    constructor(name, author, year) {
        this._name = name;
        this._author = author;
        this._year = year;
    }

    static getOldestBook(books) {
        if (books.length === 0) {
            return null
        }
        return [...books].sort((a, b) => a._year - b._year)[0];
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
        if (typeof newName === 'string') this._name = newName;
    }

    set author(newAuthor) {
        if (typeof newAuthor === 'string') this._author = newAuthor;
    }

    set year(newYear) {
        if (typeof newYear === "number" && newYear <= new Date().getFullYear() && newYear > 0) this._year = newYear;
    }

    printInfo() {
        console.log(`This is "${this._name}", has written by ${this._author} and has published in ${this._year}.`);
    }
}

