import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChangerComponent";
import BookDetails from "./BookDetailsComponent";
import  * as BooksAPI from "../../BooksAPI";

class Book extends Component {

    state = {}

    moveBookToShelf = (shelf) =>{
        BooksAPI.update(this.props.content, shelf).then(res =>{
            if(this.props.updateShelfs)
                this.props.updateShelfs();
        })
    }

    render() {
        const {content} = this.props
        return (

            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: content.imageLinks !== undefined ? `url(${content.imageLinks.thumbnail})`: 'url()' }}></div>
                    <BookShelfChanger value={content.shelf} moveBook={this.moveBookToShelf} />
                </div>
                <BookDetails title={content.title} authors={content.authors} />
            </div>

        )
    }
}

export default Book