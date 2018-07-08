import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import BookShelf from './BookShelf'

class ListCategories extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired
  }

  state = {

  }

  render() {
    const { categories, books, bookActions } = this.props

    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            {categories.map(category => (
              <div className="bookshelf">
                <h2 className="bookshelf-title">{category.name}</h2>
                <BookShelf
                  books={books.filter(book => book.category_key === category.key)}
                  bookActions={bookActions}
                  categories={categories}/>
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

export default ListCategories
