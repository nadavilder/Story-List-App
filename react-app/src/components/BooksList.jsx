import { useLoaderData } from 'react-router-dom';

import Book from './Book';
import classes from './BooksList.module.css';

function BooksList() {
  const books = useLoaderData();

  return (
    <>
      {books.length > 0 && (
        <ul className={classes.books}>
          {books.map((book) => (
            <Book key={book.id} id={book.id} title={book.title} author={book.author} days={book.days}/>
          ))}
        </ul>
      )}
      {books.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are no books yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}

export default BooksList;
