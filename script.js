
const myLibrary = [];

class Book {
    constructor(title, author, pages, status) {

        this.id = crypto.randomUUID();
        this.bookname = title;
        this.author = author;
        this.size = pages;
        this.read = status;
    }

    info() {
        return ` ${this.bookname} by ${this.author}, ${this.size}, ${this.read}`
    };


    toggleRead() {
        if (this.read === "Read") {
            this.read = "Not Read";
        } else if (this.read === "Not Read") {
            this.read = "Half-read";
        } else if (this.read === "Half-read") {
            this.read = "Skimmed";
        } else {
            this.read = "Read";
        }
    }
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
        card.classList.add("card");

        card.dataset.id = book.id;

        card.innerHTML = `
        <h3>${book.bookname}</h3>
        <p><strong>Author:</strong> ${book.author}</p>
        <p><strong>Pages:</strong> ${book.size}</p>
        <p><strong>Status:</strong> ${book.read}</p>
        `;

        const removeBtn = document.createElement("button");
        removeBtn.textContent = "Remove Book";

        removeBtn.addEventListener("click", () => {
            const index = myLibrary.findIndex((bookItem) => bookItem.id === book.id);
            if (index !== -1) {
                myLibrary.splice(index, 1);
            }
            displayLibrary();
        });

        const toggleBtn = document.createElement("button");
        toggleBtn.textContent = "Toggle Read";
        toggleBtn.addEventListener("click", () => {
            const readBook = myLibrary.find((bookItem) => bookItem.id === book.id);
            readBook.toggleRead();
            displayLibrary();
        });


        card.appendChild(removeBtn);
        card.appendChild(toggleBtn);

        container.appendChild(card);
    });

};


const book1 = addBookToLibrary("Macbeth", "Shakespeare", "30+ pages", "Read");

const book2 = addBookToLibrary("Naruto", "Masashi Kishimoto", "1000+ pages", "Half-read");

const book3 = addBookToLibrary("The Method", "Archimedes", "40+ pages", "Skimmed");

const book4 = addBookToLibrary("Romeo & Juliet", "Shakespeare", "30+ pages", "Read");

const book5 = addBookToLibrary("Can't Hurt Me", "David Goggins", "100+ pages", "Half-read");

const book6 = addBookToLibrary("Principia Mathematica", "Isaac Newton", "200+ pages", "Skimmed");

const book7 = addBookToLibrary("The Beginning of Infinity", "David Deustch", "200+ pages", "Read");


const newButton = document.querySelector("#new-book");
const form = document.querySelector("#book-form");
const cancelBtn = document.querySelector("#cancel");

newButton.addEventListener("click", () => {
    form.classList.remove("hidden");
});

cancelBtn.addEventListener("click", () => {
    form.classList.add("hidden");
    form.reset();
});


form.addEventListener("submit", (e) => {
    e.preventDefault();

    const title = document.querySelector("#title").value;
    const author = document.querySelector("#author").value;
    const pages = document.querySelector("#pages").value;
    const read = document.querySelector("#read").checked ? "Read" : "Not read"

    addBookToLibrary(title, author, pages, read);
    form.reset();
    form.classList.add(".hidden");
});

