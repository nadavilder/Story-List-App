import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Books, { loader as booksLoader } from './routes/Books';
import NewBook, { action as newBookAction } from './routes/NewBook';
import BookDetails, { loader as bookDetailsLoader } from './routes/BookDetails';
import RootLayout from './routes/RootLayout';
import './index.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Books />,
        loader: booksLoader,
        children: [
          { path: '/create-book', element: <NewBook />, action: newBookAction },
          { path: '/:bookId', element: <BookDetails />, loader: bookDetailsLoader }
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <GoogleOAuthProvider clientId= {import.meta.env.VITE_APP_GOOGLE_CLIENT_ID} >
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </GoogleOAuthProvider>,

);
