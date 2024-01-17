const fs = require('node:fs/promises');

async function getStoredBooks() {
  const rawFileContent = await fs.readFile('books.json', { encoding: 'utf-8' });
  const data = rawFileContent? JSON.parse(rawFileContent): [];
  const storedBooks = data.books ?? [];
  return storedBooks;
}

function storeBooks(books) {
  return fs.writeFile('books.json', JSON.stringify({ books: books || [] }));
}

exports.getStoredBooks = getStoredBooks;
exports.storeBooks = storeBooks;