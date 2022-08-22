import Shelfs from '../constants/Shelfs';
const ShelfSelect = ({ book, changeShelf }) => {
  return (
    <div className='book-shelf-changer'>
      <select
        onChange={(e) => changeShelf(book, e.target.value)}
        defaultValue={book.shelf ? book.shelf : 'none'}
      >
        <option disabled>Move to...</option>
        {Object.entries(Shelfs).map(([key, val]) => (
          <option key={key} value={key}>
            {val}
          </option>
        ))}
        <option value='none'>None</option>
      </select>
    </div>
  );
};

export default ShelfSelect;
