
const express = require('express');
const bodyParser = require('body-parser');

const { getStoredBooks, storeBooks } = require('./data/books');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
  // Attach CORS headers
  // Required when using a detached backend (that runs on a different domain)
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,POST,DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

app.get('/books', async (req, res) => {
  const storedBooks = await getStoredBooks();
  res.json({ books: storedBooks });
});

app.get('/books/:id', async (req, res) => {
  const storedBooks = await getStoredBooks();
  const book = storedBooks.find((book) => book.id === req.params.id);
  res.json({ book });
});


app.post('/books', async (req, res) => {
  console.log("books enter");
  const existingBooks = await getStoredBooks();
  const bookData = req.body;
  const newBook = {
    ...bookData,
    id: Math.random().toString(),
  };
  const updatedBooks = [newBook, ...existingBooks];
  await storeBooks(updatedBooks);
  res.status(201).json({ message: 'Stored new book.', book: newBook });
});

app.delete('/books/:id', async (req, res) => {
  console.log("DELETE Request Called for /api endpoint")
  const storedBooks = await getStoredBooks();
  console.log("storebook")
  const updatedBooks = storedBooks.filter((book) => book.id != req.params.id);
  console.log("updatedBooks")
  await storeBooks(updatedBooks);
  res.status(201).json({ message: 'Book Deleted' });


})




app.listen(8080,function() {
  console.log("Server started on port 8080.");
});

