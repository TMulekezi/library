function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}


const library = [];


function displayLibrary(library) {
    const domLibrary = document.querySelector(".library");
    while (domLibrary.firstChild) {
        domLibrary.removeChild(domLibrary.lastChild);
    }
    for (let i = 0; i < library.length; i++) {
        const book = document.createElement("div");
        book.classList.add("book");
        const details = document.createElement("div");
        details.classList.add("details");

        const titleOutput = document.createElement("div");
        titleOutput.textContent =`Title: ${library[i].title}`;
        const authorOutput = document.createElement("div");
        authorOutput.textContent =`Author: ${library[i].author}`;
        const pagesOutput = document.createElement("div");
        pagesOutput.textContent =`Pages: ${library[i].pages}`;

        const readOutput = document.createElement("div");
        readOutput.classList.add("status");

        if (library[i].status) {
            readOutput.textContent = "Read";
        } else {
            readOutput.textContent = "Not read";
        }

        readOutput.addEventListener("click", function() {
            if (this.textContent === "Not read") {
                this.textContent = "Read";
            } else {
                this.textContent = "Not read";
            }
        });


        details.appendChild(titleOutput);
        details.appendChild(authorOutput);
        details.appendChild(pagesOutput);
        details.appendChild(readOutput);

        const controls = document.createElement("div");
        controls.classList.add("controls");

        const remove = document.createElement("button");
        remove.classList.add("remove");
        remove.textContent = "Remove";

        remove.addEventListener("click", removeBook);

        controls.appendChild(remove);

        book.appendChild(details);
        book.appendChild(controls);

        book.value = i;
        domLibrary.appendChild(book);
    }
}

function addBookToLibrary(book) {
    library.push(book);
}

function removeBook() {
    const book = this.parentNode.parentNode;
    let index = book.value;
 

    library.splice(index, 1);
    displayLibrary(library);
}
const addButton = document.querySelector(".add");

addButton.addEventListener("click", ()=>{
    const form = document.querySelector(".book-form");
    form.style.visibility = "visible";
});

const closeButton = document.querySelector(".close");

closeButton.addEventListener("click", ()=>{
    const form = document.querySelector(".book-form");
    form.style.visibility = "hidden";
});



function onFormSubmit() {
	event.preventDefault();

    const title = document.querySelector("#title");
    let titleOutput = title.value;
    const author = document.querySelector("#author");
    let authorOutput = author.value;
    const pages = document.querySelector("#pages");
    let pagesOutput = pages.value;

    let radioOutput = false;
    let radioMessage = "";
    const radios = document.getElementsByName("read");

    radios.forEach(function(radio) {
        if (radio.checked) {
            radioMessage = radio.value;
        }
    });


    if (radioMessage === "read") {
        radioOutput = true;
    }
    const form = document.querySelector(".book-form");
    form.style.visibility = "hidden";

    const newBook = new Book(titleOutput, authorOutput, pagesOutput, radioOutput);
    addBookToLibrary(newBook);
    displayLibrary(library);
}




