import React, {Component} from 'react'
import {Route} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import ListCategories from './components/ListCategories'
import SearchBooks from './components/SearchBooks'

class BooksApp extends Component {
  state = {
    categories: [
      {key: 'currentlyReading', name: 'Currently Reading'},
      {key: 'wantToRead', name: 'Want to Read'},
      {key: 'read', name: 'Read'}
    ],
    books: [
      {key: 'mocking_bird', backgroundImage: 'http://books.google.com/books/content?id=PGR2AwAAQBAJ&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73-GnPVEyb7MOCxDzOYF1PTQRuf6nCss9LMNOSWBpxBrz8Pm2_mFtWMMg_Y1dx92HT7cUoQBeSWjs3oEztBVhUeDFQX6-tWlWz1-feexS0mlJPjotcwFqAg6hBYDXuK_bkyHD-y&source=gbs_api', title: 'To Kill a Mockingbird', authors: ['Harper Lee'], category_key: 'currentlyReading'},
      {key: 'enders_game', backgroundImage: 'http://books.google.com/books/content?id=yDtCuFHXbAYC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72RRiTR6U5OUg3IY_LpHTL2NztVWAuZYNFE8dUuC0VlYabeyegLzpAnDPeWxE6RHi0C2ehrR9Gv20LH2dtjpbcUcs8YnH5VCCAH0Y2ICaKOTvrZTCObQbsfp4UbDqQyGISCZfGN&source=gbs_api', title: "Ender's Game", authors: ['Orson Scott Card'], category_key: 'currentlyReading'}
    ]
  }

  bookActions = {
    changeBookCategory: (book, toCategoryKey) =>
      this.setState(prevState => ({
        books: this.state.books.map(b => b.key === book.key ? (b.category_key = toCategoryKey) && b : b)
      })),

    removeBookFromReading: book =>
      this.setState(prevState => ({
        books: this.state.books.filter(b => b.key !== book.key)
      }))
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListCategories
            categories={this.state.categories}
            books={this.state.books}
            bookActions={this.bookActions}
            />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
