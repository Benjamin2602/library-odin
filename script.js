const main = document.getElementById("root");
const inputDiv = document.getElementById("input-div-id");
//Hide the input-div
inputDiv.style.display = "none";

const addButton = document.getElementById("add-book-id");
const submitButton = document.getElementById("submit-id");

const title = document.getElementById("book-id");
const author = document.getElementById("author-id");
const read = document.getElementById("read-id");

let bookName;
let bookAuthor;
let bookRead;

let myLibrary = [];

addButton.addEventListener("click", function () {
  // Hide the "Add" button
  addButton.style.display = "none";
  // Show the input-div
  inputDiv.style.display = "block";
});

function Book(book) {
  myLibrary.push(book);
  addBookToLibrary(myLibrary);
}

function addBookToLibrary(myLibrary) {
  // Clear the existing content
  main.innerHTML = "";

  for (let i = 0; i < myLibrary.length; i++) {
    const bookAdd = document.createElement("div");
    bookAdd.innerHTML = `
        <div class="book-title">${myLibrary[i].title}</div>
        <div class="book-author">${myLibrary[i].author}</div>
        <div class="book-read">${myLibrary[i].read}</div>
      `;
    main.appendChild(bookAdd);
  }
}

//submit button
submitButton.addEventListener("click", function (e) {
    e.preventDefault();
    // Get the values from the input fields
    bookName = title.value;
    bookAuthor = author.value;
    bookRead = read.value;
  
    const book = {
      title: bookName,
      author: bookAuthor,
      read: bookRead,
    };
  
    Book(book);
  
    // Clear the input fields after submitting
    title.value = "";
    author.value = "";
    read.value = "";
  
    // Hide the input-div after submitting
    inputDiv.style.display = "none";
  
    // Show the "Add" button again
    addButton.style.display = "block";
  });