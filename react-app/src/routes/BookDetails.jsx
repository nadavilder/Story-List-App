import { useLoaderData, Link } from 'react-router-dom';

import Modal from '../components/Modal';
import classes from './BookDetails.module.css';

function BookDetails() {
  const book = useLoaderData();

  if (!book) {
    return (
      <Modal>
        <main className={classes.details}>
          <h1>Could not find book</h1>
          <p>Unfortunately, the requested book could not be found.</p>
          <p>
            <Link to=".." className={classes.btn}>
              Okay
            </Link>
          </p>
        </main>
      </Modal>
    );
  }
  return (
    <Modal>
      <main className={classes.details}>
        <p className={classes.title}>{book.title}</p>
        <p className={classes.author}>{book.author}</p>
        <p className={classes.about}>{book.about}</p>
        <p className={classes.start}>{book.start}</p>
        <p className={classes.end}>{book.end}</p>
        <p className={classes.end}>{book.days}</p>
      </main>
    </Modal>
  );
}

export default BookDetails;

export async function loader({params}) {
  const response = await fetch('http://localhost:8080/books/' + params.bookId);
  const resData = await response.json();
  return resData.book;
}

