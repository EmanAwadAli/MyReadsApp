import Book from './Book';

const BookShelf = ({ shelfKey, shelfTitle, books, changeShelf }) => {
  return (
    <div className='bookshelf'>
      <h2 className='bookshelf-title'>{shelfTitle}</h2>
      <div className='bookshelf-books'>
        <ol className='books-grid'>
          {books.filter((book) => book.shelf === shelfKey).map((book) => (
              <Book key={book.id} details={book} changeShelf={changeShelf} />
            ))
          }
        </ol>
      </div>
    </div>
  );
};
export default BookShelf;
