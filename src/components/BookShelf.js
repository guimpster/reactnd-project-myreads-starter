import React, {Component} from 'react'
import PropTypes from 'prop-types'

import Book from './Book'

class BookShelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired
  }

  render() {
    const {books, categoryList} = this.props

    return (
      <div className="bookshelf-books">
        <ol className="books-grid">
          {books.map(book => (
            <li>
              <Book book={book} categoryList={categoryList}/>
            </li>
          ))}
        </ol>
      </div>
    )
  }
}

export default BookShelf
