import React, { Component } from "react";
import Book from "../Book/BookComponent";

class Shelf extends Component {

    state = {}

    render() {
        console.log('shelfprops',this.props)
        return (

            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.content.title}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">

                    {this.props.content.books.map(book =>
                        <li key={book.id}>
                          <Book content={book} />
                        </li>
                    )}

                </ol>
                </div>
            </div>
        )
    }
}

export default Shelf