import { Link } from 'react-router-dom';
import { MdMenuBook, MdOutlineAdd } from 'react-icons/md';

import classes from './MainHeader.module.css';

function MainHeader() {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMenuBook />
        React Book List
      </h1>
      <p>
        <Link to="/create-book" className={classes.button} >
          <MdOutlineAdd size={18} />
          New Book
        </Link>
      </p>
    
    </header>
  );
}

export default MainHeader;
