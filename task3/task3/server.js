const express = require("express");
const app = express();
const port = 3000;

// Middleware to parse JSON body
app.use(express.json());

// In-memory data store
let books = [
  { id: 1, title: "The Hobbit", author: "J.R.R. Tolkien" },
  { id: 2, title: "1984", author: "George Orwell" }
];

app.get("/", (req, res) => {
  res.send("Welcome to the Books API! Use /books to get started.");
});

// GET all books
app.get("/books", (req, res) => {
  res.json(books);
});

// GET a single book by ID
app.get("/books/:id", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  res.json(book);
});

// POST a new book
app.post("/books", (req, res) => {
  const { title, author } = req.body;
  if (!title || !author) {
    return res.status(400).json({ message: "Title and author are required" });
  }
  const newBook = {
    id: books.length > 0 ? books[books.length - 1].id + 1 : 1,
    title,
    author
  };
  books.push(newBook);
  res.status(201).json(newBook);
});

// PUT (update) a book
app.put("/books/:id", (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  if (!book) {
    return res.status(404).json({ message: "Book not found" });
  }
  const { title, author } = req.body;
  if (title) book.title = title;
  if (author) book.author = author;

  res.json(book);
});

// DELETE a book
app.delete("/books/:id", (req, res) => {
  const bookIndex = books.findIndex(b => b.id === parseInt(req.params.id));
  if (bookIndex === -1) {
    return res.status(404).json({ message: "Book not found" });
  }
  const deletedBook = books.splice(bookIndex, 1);
  res.json(deletedBook[0]);
});

// Start server
app.listen(port, () => {
  console.log(`📚 Books API running at http://localhost:${port}`);
});
