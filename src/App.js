import React from 'react'
import {Route} from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'

import ListCategories from './components/ListCategories'
import SearchBooks from './components/SearchBooks'

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <ListCategories/>
        )}/>
        <Route exact path="/search" render={() => (
          <SearchBooks/>
        )}/>
      </div>
    )
  }
}

export default BooksApp
