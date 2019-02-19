import React, { Component } from "react";
import BookList from "../Book/BookListComponent";

class Shelf extends Component {

    state = {}



    render() {
        return (

            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.content.title}</h2>
                <div className="bookshelf-books">

                    <BookList books={this.props.content.books} updateShelfs={this.props.updateShelfs}/>


                </div>
            </div>
        )
    }
}

export default Shelf