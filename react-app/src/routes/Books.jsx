import { Outlet } from 'react-router-dom';

import BooksList from '../components/BooksList';

function Books() {
  return (
    <>
    <Outlet />
      <main>
        <BooksList />
      </main>
      
      
    </>
  );
}

export default Books;

export async function loader() {
  console.log("loader enter");
  const response = await fetch('http://localhost:8080/books');
  console.log("response");
  const resData = await response.json();
  console.log(resData.books);
  return resData.books;
}
