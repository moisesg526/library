let container = document.querySelector(".container");

let h1 = document.createElement("h1");
h1.innerText = "Yearly Reading";
container.appendChild(h1);

let btn = document.querySelector(".btn");
container.appendChild(btn);

let bookContainer = document.querySelector(".book-container");
container.appendChild(bookContainer);

let addBtn = document.querySelector(".add-btn");

let addBookForm = document.querySelector(".add-book-form");
container.appendChild(addBookForm);

let close = document.querySelector(".close");
let bookList = document.querySelector(".book-list");

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
  library.forEach(function (book) {
    let li = document.createElement("li");
    li.innerHTML = `
          <img src="./images/book.jpg" alt="Book"> <h3>${book.title}</h3> <p>${
      book.author
    }</p> <p>${book.pages} pages</p> <p>${
      book.read === true ? "Read" : "Unread"
    }</p>`;
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
  addBookForm.style.display =
    addBookForm.style.display === "block" ? "none" : "block";
};

close.onclick = function () {
  addBookForm.style.display =
    addBookForm.style.display === "block" ? "none" : "block";
};

addBtn.addEventListener("click", addBookToLibrary);

function addBookToLibrary(e) {
  e.preventDefault();
  //   let li = document.createElement("li");
  //   let title = "#book-name".valueOf();
  //   li.innerHTML = `<img src="./images/book.jpg" alt="Book"> <h3>${title}</h3>`;
  //   bookList.appendChild(li);
  let bookTitle = document.querySelector(".book-name");
  let author = document.querySelector(".author");
  let pages = document.querySelector(".number-of-pages");
  let read = document.querySelector(".read");

  let li = document.createElement("li");
  li.innerHTML = `
          <img src="./images/book.jpg" alt="Book"> <h3>${
            bookTitle.value
          }</h3> <p>${author.value}</p> <p>${pages.value}</p> <p>${
    read.vlaue === true ? "read" : "Unread"
  }</p>`;
  bookList.appendChild(li);
  console.log(bookTitle);
  alert("added");
}
