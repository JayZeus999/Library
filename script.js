
const myLibrary = [];

function Book(title, author, pages, status) {
    if (!new.target) {
        throw Error("You must use new operator")
    }

    this.id = crypto.randomUUID();
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

const book1 = addBookToLibrary("Macbeth", "Shakespeare", "60 pages", "Read");
console.log(book1.info());
console.log(myLibrary);

const book2 = addBookToLibrary("Naruto", "Masashi Kishimoto", "1000+ pages", "Half-read");
console.log(book2.info());
console.log(myLibrary);

const book3 = addBookToLibrary("The Method", "Archimedes", "40+ pages", "Skimmed");
console.log(book3.info());
console.log(myLibrary);
