import ShelfSelect from './shelfSelect';

const Book = ({ details, changeShelf }) => {
  const bookBg = details.imageLinks && details.imageLinks.thumbnail;
  return (
    <li>
      <div className='book'>
        <div className='book-top'>
          <div
            className='book-cover'
            style={{
              width: 128,
              height: 193,
              background: bookBg ? `url(${bookBg})` : '#eee',
            }}
          ></div>
          <ShelfSelect book={details} changeShelf={changeShelf} />
        </div>
        <div className='book-title'>{details.title}</div>
        <div className='book-authors'>
          {details.authors &&
            details.authors.map((author) => <span key={author}>{author}</span>)}
        </div>
      </div>
    </li>
  );
};

export default Book;
