
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
};

function addBookToLibrary(title, author, pages, status) {
    const newBook = new Book(title, author, pages, status);
    myLibrary.push(newBook);
    displayLibrary();
    return newBook;
};


function displayLibrary() {
    const container = document.querySelector("#library-cards");
    container.innerHTML = "";

    myLibrary.forEach((book) => {
        const card = document.createElement("div");
        card.classList.add(".card");

        card.innerHTML = `
        <h3>${book.title}<h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.pages}</p>
        <p><strong>Status:</strong> ${book.status}</p>
        `;

        container.appendChild(card);
    });

};


const book1 = addBookToLibrary("Macbeth", "Shakespeare", "30+ pages", "Read");

const book2 = addBookToLibrary("Naruto", "Masashi Kishimoto", "1000+ pages", "Half-read");

const book3 = addBookToLibrary("The Method", "Archimedes", "40+ pages", "Skimmed");

const book4 = addBookToLibrary("Romeo & Juliet", "Shakespeare", "30+ pages", "Read");

const book5 = addBookToLibrary("Can't Hurt Me", "David Goggins", "60 pages", "Half-read");

const book6 = addBookToLibrary("Principia Mathematica", "Isaac Newton", "200+ pages", "Skimmed");

const book7 = addBookToLibrary("The Beginning of Infinity", "David Deustch", "200+ pages", "Read");
