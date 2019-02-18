import React, { Component } from "react";
import Book from "../Book/BookComponent";

class Shelf extends Component {

    state = {}



    render() {
        return (

            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.content.title}</h2>
                <div className="bookshelf-books">
                <ol className="books-grid">

                    {this.props.content.books.map(book =>
                        <li key={book.id}>
                          <Book content={book} updateShelfs={this.props.updateShelfs}/>
                        </li>
                    )}

                </ol>
                </div>
            </div>
        )
    }
}

export default Shelf