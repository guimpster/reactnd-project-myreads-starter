import React, {Component} from 'react'

import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    bookShelves: PropTypes.array.isRequired,
    book: PropTypes.object.isRequired,
    bookActions: PropTypes.objectOf(PropTypes.func).isRequired
  }

  moveToBookShelf = (event) => {
    const toBookShelfKey = event.target.value
    const {book, bookActions} = this.props

    bookActions.updateBookShelf(book, toBookShelfKey)
  }

  render() {
    const {book, bookShelves} = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.backgroundImage})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.moveToBookShelf} value={book.bookShelfKey}>
              <option value="move" disabled>Move to...</option>
              {bookShelves.map(bookShelf => (
                <option key={bookShelf.key} value={bookShelf.key}>{bookShelf.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors.map(author => (
          <div key={author.key} className="book-authors">{author.name}</div>
        ))}
      </div>
    )
  }
}

export default Book
