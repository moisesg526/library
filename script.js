const library = [
  "Ellie's spooky surprise",
  "Mercy Watson goes for a ride",
  "Marion and the secret letter",
  "Heidi Heckelbeck might be afraid of the dark",
  "Heidi Heckelbeck and the hair emergency!",
];

let ul = document.createElement("ul");

for (let books of library) {
  let li = document.createElement("li");
  li.innerText = books;
  ul.appendChild(li);
}

document.body.appendChild(ul);

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

function addBookToLibrary() {
  console.log("Book Added");
}
