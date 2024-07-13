// Book constructor
function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
}

// Initial library array
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
container.appendChild(bookForm);

let addBookForm = document.querySelector(".add-book-form");
container.appendChild(addBookForm);

let closeWindow = document.querySelector(".close");
container.appendChild(closeWindow);

let bookList = document.querySelector(".book-list");
container.appendChild(bookList);

let count = 0;

// Function to display books from the library array
function displayBooks() {
  library.forEach(function (book) {
    addBookToDOM(book);
  });
}

// Function to add a book to the DOM
function addBookToDOM(book) {
  count++;
  let li = document.createElement("li");
  li.setAttribute("id", count);
  li.innerHTML = `
      <img src="./images/book.jpg" alt="Book">
      <h3>${book.title}</h3>
      <p>${book.author}</p>
      <p>${book.pages} pages</p>
      <button class="read-btn">${book.read ? "Read" : "Unread"}</button>
      <button class="remove">Delete</button>
    `;
  bookList.appendChild(li);

  li.querySelector(".remove").addEventListener("click", function () {
    alert("Delete button clicked");
    li.remove();
  });
}

displayBooks();

btn.onclick = function () {
  bookForm.style.display =
    bookForm.style.display === "block" ? "none" : "block";
};

closeWindow.onclick = function () {
  bookForm.style.display = "none";
};

bookForm.addEventListener("submit", addBookToLibrary);


//Function to add book to library
function addBookToLibrary(e) {
  e.preventDefault();

  let bookTitle = document.querySelector(".book-name").value;
  let author = document.querySelector(".author").value;
  let pages = document.querySelector(".number-of-pages").value;
  let read = document.querySelector(".read").checked;

  let newBook = new Book(bookTitle, author, pages, read);
  library.push(newBook);
  addBookToDOM(newBook);

  bookForm.reset();
  bookForm.style.display = "none";
}
