# MyReads Project

A simple react app that classifies user readings into 'Currently Reading', 'Want to Read' and 'Read'.

This is a project made for Udacity React Fundamentals course.

## Using

Use the following commands

* clone this repo with `git clone git@github.com:guimpster/reactnd-project-myreads-starter.git`
* install all project dependencies with `npm install`
* start the development server with `npm start`

## Important
The backend API uses a fixed set of cached search results and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Files description
```bash
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use whithin the app.
├── package.json # npm package manager file.
├── public
│   ├── favicon.ico # React default Icon
│   └── index.html
└── src
    ├── App.css # Styles for your app.
    ├── App.js # This is the app's root. Contains static HTML right now.
    ├── App.test.js # Used for testing but not implemented.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend.
    ├── components # All implementation of book components
    │   ├── Book.js # a single book element
    │   ├── BookShelf.js # every book is grouped into bookshelves
    │   ├── ListBookShelf.js # book visualization page
    │   ├── SearchBooks.js # book searching page
    ├── icons # Helpful images for your app.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles.
    └── index.js # It is used for DOM rendering only.
```

## Contributing

This repository is private only. Therefore, pull requests will most likely not be accepted.
