import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import BookShelf from './BookShelf'

class ListBookShelf extends Component {
  static propTypes = {
    bookShelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    bookActions: PropTypes.objectOf(PropTypes.func).isRequired
  }

  componentDidMount = () => this.props.bookActions.refreshBookShelves()

  render() {
    const { bookShelves, books, bookActions } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {bookShelves.filter(bookShelf => bookShelf.key !== 'none').map(bookShelf => (
              <div key={bookShelf.key} className="bookshelf">
                <h2 className="bookshelf-title">{bookShelf.name}</h2>
                <BookShelf
                  books={books.filter(book => book.bookShelfKey === bookShelf.key)}
                  bookActions={bookActions}
                  bookShelves={bookShelves}/>
              </div>
            ))}
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default ListBookShelf
