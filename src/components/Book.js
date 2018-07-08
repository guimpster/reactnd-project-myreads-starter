import React, {Component} from 'react'

class Book extends Component {
  changeCategory = (event) => {
    const toCategoryKey = event.target.value
    const {book, bookActions} = this.props

    toCategoryKey === 'none' ? bookActions.removeBookFromReading(book) : bookActions.changeBookCategory(book, toCategoryKey)
  }

  render() {
    const {book, categories } = this.props

    return (
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.backgroundImage})` }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.changeCategory} value={book.category_key}>
              <option value="move" disabled>Move to...</option>
              {categories.map(category => (
                <option value={category.key}>{category.name}</option>
              ))}
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        {book.authors.map(author => (
          <div className="book-authors">{author}</div>
        ))}
      </div>
    )
  }
}

export default Book
