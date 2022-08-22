import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import BookShelves from './pages/BookShelves';
import SearchPage from './pages/Search';
import * as BooksAPI from './BooksAPI';

function App() {
  // Books State
  const [books, setBooks] = useState([]);

  // Get All Books In The shelves
  useEffect(() => {
    const getBooks = async () => {
      const res = await BooksAPI.getAll();
      setBooks(res);
    };
    getBooks();
  }, []);

  // Update (Render) Bookshelves After changing a book shelf
  const setBooksHandler = (book, newShelf) => {
    const updatedBooks = books.map((b) => {
      if (b.id === book.id) {
        b.shelf = newShelf;
      }
      return b;
    });
    if (!books.find((bk) => bk.id === book.id)) {
      updatedBooks.push({ ...book, shelf: newShelf });
    }
    setBooks(updatedBooks);
  };

  // Change BookShelf
  const changeShelfHandler = async (book, shelf) => {
    await BooksAPI.update(book, shelf);
    setBooksHandler(book, shelf);
  };

  return (
    <Routes>
      {/* Books Shelfs Page */}
      <Route
        exact 
        path='/'
        element=  {
          <BookShelves books={books} changeShelf={changeShelfHandler} setBooksHandler={setBooksHandler}/>
        }
      />
      {/* Search Page */}
      <Route
        path='/search'
        element={<SearchPage books={books} changeShelf={changeShelfHandler} />}
      />
    </Routes>
  );
}

export default App;
