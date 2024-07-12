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

let container = document.querySelector(".container");

let h1 = document.createElement("h1");
h1.innerText = "Yearly Reading";
container.appendChild(h1);

let btn = document.querySelector(".btn");
container.appendChild(btn);

let bookContainer = document.querySelector(".book-container");
container.appendChild(bookContainer);

let bookForm = document.querySelector(".book-form");

let addBookForm = document.querySelector(".add-book-form");
container.appendChild(addBookForm);

let closeWindow = document.querySelector(".close");
let bookList = document.querySelector(".book-list");

let remove = document.querySelector(".remove");

let count = 0;

function displayBooks() {
  library.forEach(function (book) {
    count++;
    let li = document.createElement("li");
    li.setAttribute("id", count);
    li.innerHTML = `
          <img src="./images/book.jpg" alt="Book"> <h3>${book.title}</h3> <p>${
      book.author
    }</p> <p>${book.pages} pages</p> <p>${
      book.read === true ? "Read" : "Unread"
    }</p>       <button class="remove">Delete</button>`;
    bookList.appendChild(li);
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
  bookForm.style.display =
    bookForm.style.display === "block" ? "none" : "block";
};

closeWindow.onclick = function () {
  bookForm.style.display =
    bookForm.style.display === "block" ? "none" : "block";
};

// remove.onclick = function () {
//   window.onload = function () {
//     alert("deleted item");
//   };
// };

bookForm.addEventListener("submit", addBookToLibrary);

function addBookToLibrary(e) {
  count++;
  e.preventDefault();

  let bookTitle = document.querySelector(".book-name");
  let author = document.querySelector(".author");
  let pages = document.querySelector(".number-of-pages");
  let read = document.querySelector(".read");

  let li = document.createElement("li");
  li.setAttribute("id", count);
  li.innerHTML = `
          <img src="./images/book.jpg" alt="Book"> <h3>${
            bookTitle.value
          }</h3> <p>${author.value}</p> <p>${pages.value}</p> <p>${
    read.checked ? "Read" : "Unread"
  }</p> <button class="remove">Delete</button>`;
  bookList.appendChild(li);
  document.querySelector(".book-form").reset();
  document.querySelector(".book-form").style.display = "none";

  console.log(bookTitle);
}
