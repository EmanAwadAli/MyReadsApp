import BookShelf from "../componenets/BookShelf";
import Shelfs from "../constants/Shelfs";
import { Link } from "react-router-dom"

const BookShelves = ({ books, changeShelf }) => {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
          {
            Object.entries(Shelfs).map(([key, val]) => <BookShelf key={key} shelfKey={key} shelfTitle={val} books={books} changeShelf={changeShelf} />)
          }
          </div>
        </div>
        
        {/* Open Search Pag */}
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
}

export default BookShelves;