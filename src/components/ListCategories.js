import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'

import BookShelf from './BookShelf'

class ListCategories extends Component {
  static propTypes = {
    categories: PropTypes.array.isRequired
  }

  state = {

  }

  render() {
    const { categories } = this.props

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
                <BookShelf books={category.books} categoryList={categories.map(category => ({id: category.id, name: category.name}))}/>
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
