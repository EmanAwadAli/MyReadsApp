import { useState } from 'react';
import { Link } from 'react-router-dom';
import * as BooksAPI from '../BooksAPI';
import Book from '../componenets/Book';

const SearchPage = ({ books, changeShelf }) => {
  // Search Result State
  const [searchResult, setSearchResult] = useState([]);

  // Search a Specific book Handler
  const searchBookHandler = async (query, maxResults) => {
    if (query !== '') {
      const res = await BooksAPI.search(query, maxResults);
      // Now we have to add the shelf property to the each book
      if (res && res.length > 0) {
        const booksWithShelves = res.map((b) => {
          const selectedBook = books.find((bk) => bk.id === b.id);
          b.shelf = selectedBook ? selectedBook.shelf : 'none';
          return b;
        });

        setSearchResult(booksWithShelves);
      } else {
        setSearchResult([]);
      }
    } else {
      setSearchResult([]);
    }
  };

  // Upadte (Rerender) Search Result Based Query Value user entered In Search Field
  const updateQuery = (e, searchQuery) => {
    e.preventDefault();
    searchBookHandler(searchQuery);
  };

  // Change book Shelf && Update (Rerender) Bookshelves Page
  const changeShelfHandler = (b, shelf) => {
    changeShelf(b, shelf);
  };
  return (
    <div className='search-books'>
      <div className='search-books-bar'>
        {/* Close Search Page && Back To Bookshelves Page */}
        <Link to='/' className='close-search'>
          Close
        </Link>
        <div className='search-books-input-wrapper'>
          <input
            type='text'
            placeholder='Search by title, author, or ISBN'
            onChange={(e) => updateQuery(e, e.target.value)}
          />
        </div>
      </div>
      <div className='search-books-results'>
        <ol className='books-grid'>
          {searchResult.map((book) => (
            <Book
              key={book.id}
              details={book}
              changeShelf={changeShelfHandler}
            />
          ))}
        </ol>
      </div>
    </div>
  );
};

export default SearchPage;
