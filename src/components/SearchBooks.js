import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

import BookShelf from './BookShelf'

class SearchBooks extends Component {
  static propTypes = {
    bookShelves: PropTypes.array.isRequired,
    books: PropTypes.array.isRequired,
    bookActions: PropTypes.objectOf(PropTypes.func).isRequired
  }

  state = {
    query: '',
    searchedBooks: []
  }

  updateSearch = (query) => {
    const {bookActions, books} = this.props

    bookActions.search(query).then(queryBooks => this.setState({
      searchedBooks: queryBooks.map(sb => books.reduce(
        (acc, val) => acc.key === val.key ? val : acc,
        sb))
    }))

    this.setState({query: query })
  }

  clearQuery = () => this.setState({query: ''})

  render() {
    const { bookShelves, bookActions } = this.props;
    const { query, searchedBooks } = this.state;

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link className="close-search" to="/">Close</Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.updateSearch(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <BookShelf
            books={searchedBooks}
            bookActions={bookActions}
            bookShelves={bookShelves}/>
        </div>
      </div>
    )
  }
}

export default SearchBooks
