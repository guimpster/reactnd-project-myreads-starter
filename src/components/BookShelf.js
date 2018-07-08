import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    bookShelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    bookActions: PropTypes.objectOf(PropTypes.func).isRequired
  }

  render() {
    const {books, bookShelves, bookActions} = this.props

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li key={book.key}>
              <Book book={book} bookShelves={bookShelves} bookActions={bookActions}/>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default BookShelf
