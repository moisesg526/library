let container = document.querySelector(".container");

let h1 = document.createElement("h1");
h1.innerText = "Yearly Reading";
container.appendChild(h1);

let btn = document.querySelector(".btn");
container.appendChild(btn);

let addBookForm = document.querySelector(".add-book-form");
container.appendChild(addBookForm);

let close = document.querySelector(".close");

let ul = document.createElement("ul");

const library = [
  "Ellie's spooky surprise",
  "Mercy Watson goes for a ride",
  "Marion and the secret letter",
  "Heidi Heckelbeck might be afraid of the dark",
  "Heidi Heckelbeck and the hair emergency!",
];

function displayBooks() {
  for (let books of library) {
    let li = document.createElement("li");
    li.innerText = books;
    ul.appendChild(li);
  }
  container.appendChild(ul);
}

displayBooks();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(`${this.title} by ${this.author} ${this.pages}, ${this.read}`);
    return `${this.title} by ${this.author} ${this.pages}, ${this.read}`;
  };
  console.log("book");
}

btn.onclick = function () {
  addBookForm.style.display =
    addBookForm.style.display === "block" ? "none" : "block";
};

close.onclick = function () {
  addBookForm.style.display =
    addBookForm.style.display === "block" ? "none" : "block";
};

function addBookToLibrary() {
  console.log("Book Added");
}
