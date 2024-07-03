let container = document.querySelector(".container");

let bookContainer = document.querySelector(".book-container");

let h1 = document.createElement("h1");
h1.innerText = "Yearly Reading";
container.appendChild(h1);

let btn = document.querySelector(".btn");
container.appendChild(btn);

let addBtn = document.querySelector(".add-btn");

let addBookForm = document.querySelector(".add-book-form");
container.appendChild(addBookForm);

let close = document.querySelector(".close");

let ul = document.createElement("ul");

const library = [
  new Book("Ellie's spooky surprise", "Barkley Callie", 120, true),
  new Book("Mercy Watson goes for a ride", "DiCAmmillo Kate", 72, false),
  new Book("Marion and the secret letter", "Barkley Callie", 116, true),
  new Book(
    "Heidi Heckelbeck might be afraid of the dark",
    "Coven Wanda",
    119,
    true
  ),
  new Book(
    "Heidi Heckelbeck and the hair emergency!",
    "Coven Wanda",
    119,
    false
  ),
];

function displayBooks() {
  bookContainer.innerHTML = "";
  library.forEach(function (book) {
    let li = document.createElement("li");
    li.innerHTML = `<h3>${book.title}</h3> <p>${book.author}</p> <p>${book.pages} pages</p> <p>${book.read}</p>`;
    bookContainer.appendChild(li);
  });
}

displayBooks();

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

btn.onclick = function () {
  addBookForm.style.display =
    addBookForm.style.display === "block" ? "none" : "block";
};

close.onclick = function () {
  addBookForm.style.display =
    addBookForm.style.display === "block" ? "none" : "block";
};

function addBookToLibrary() {}
