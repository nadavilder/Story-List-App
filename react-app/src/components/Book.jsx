import { Link } from 'react-router-dom';

import classes from './Book.module.css';

function Book({ id, title,author ,days}) {
  return (
    <li className={classes.book}>
      <Link to={id}>
        <p className={classes.title}>{title}</p>
        <p className={classes.author}>{author}</p>
        <p className={classes.days}>{days + " Days"}</p>

      </Link>
    </li>
  );
}

export default Book;

