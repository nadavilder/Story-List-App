import { Link, Form, redirect } from 'react-router-dom';

import classes from './NewBook.module.css';
import Modal from '../components/Modal';

function NewBook() {
  return (
    <Modal>
      <Form method='post' className={classes.form}>
        <p>
          <label htmlFor="title">Book Name</label>
          < input id="body" name="title" required rows={1}/>
        </p>
        <p>
          <label htmlFor="name">Author</label>
          <input type="text" id="name" name="author" required />
        </p>
        <p>
          <label htmlFor="about">What's The Book About?</label>
          <textarea type="text" id="about" name="about" required rows={3}/>
        </p>
        <p>
          <label htmlFor="start">Starting Date</label>
          <input type="date" id="start" name="start" required />
        </p>
        <p>
          <label htmlFor="end">Ending Date</label>
          <input type="date" id="end" name="end" required />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button>Submit</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewBook;

export async function action({request}) {
  const formData = await request.formData();
  const bookData = Object.fromEntries(formData); // { body: '...', author: '...' }
  let Difference_In_Time = new Date(bookData.end).getTime() - new Date(bookData.start).getTime();
  let Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24);
  bookData.days =Difference_In_Days; 
  console.log(bookData);
  await fetch('http://localhost:8080/books', {
    method: 'POST',
    body: JSON.stringify(bookData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}
