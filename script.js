
const myLibrary = [];

function Book(title, author, pages, status) {
    if (!new.target) {
        throw Error("You must use new operator")
    }

    this.book = title;
    this.author = author;
    this.size = pages;
    this.read = status;
    this.info = function () {
        return ` ${this.book} by ${this.author}, ${this.size}, ${this.read}`
    };
}

function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    return newBook;
}

const book1 = addBookToLibrary("Macbeth", "Shakespeare", "60 pages", "read");
console.log(book1.info());
console.log(myLibrary);

// const book1 = new Book("Macbeth", "Shakespeare", "60 pages", "read");
// console.log(book1.info());
// this.book1.push = myLibrary;