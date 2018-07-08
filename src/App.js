import React, {Component} from 'react'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

import ListBookShelf from './components/ListBookShelf'
import SearchBooks from './components/SearchBooks'

class BooksApp extends Component {
  state = {
    bookShelves: [
      {key: 'currentlyReading', name: 'Currently Reading'},
      {key: 'wantToRead', name: 'Want to Read'},
      {key: 'read', name: 'Read'},
      {key: 'none', name: 'None'}
    ],
    books: []
  }

  parseBook = book => ({
    id: book.id,
    key: book.id,
    backgroundImage: book.imageLinks && book.imageLinks.thumbnail,
    title: book.title,
    authors: book.authors || [],
    bookShelfKey: book.shelf
  })

  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      console.log('Books found', books);
      this.setState(prevState => ({ books: books.map(book => this.parseBook(book)) }))
    })
  }

  bookActions = {
    updateBookShelf: (book, bookShelfKey) =>
      BooksAPI.update(book, bookShelfKey).then((result) =>
        this.setState(prevState => ({
          books: this.state.books.map(b => b.key === book.key ? (b.bookShelfKey = bookShelfKey) && b : b)
        })
      )),

    search: query =>
      BooksAPI.search(query).then(books => (Array.isArray(books) && books.map(book => this.parseBook(book))) || [])
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListBookShelf
            bookShelves={this.state.bookShelves}
            books={this.state.books}
            bookActions={this.bookActions}
            />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks
            bookShelves={this.state.bookShelves}
            books={this.state.books}
            bookActions={this.bookActions}/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
