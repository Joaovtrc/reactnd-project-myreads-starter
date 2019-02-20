import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChangerComponent";
import BookDetails from "./BookDetailsComponent";
import  * as BooksAPI from "../../BooksAPI";

class Book extends Component {

    state = {
        book: this.props.content
    }

    moveBookToShelf = (shelfUpdate) =>{
        BooksAPI.update(this.state.book, shelfUpdate).then(res =>{
            if(this.props.updateShelfs){
                this.props.updateShelfs();
            }else{
                console.log(this.state.book);

                this.setState({
                    book: {
                        ...this.state.book,
                        shelf: shelfUpdate
                        }
                });

                console.log(this.state.book)

            }
        })
    }

    render() {
        return (

            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: this.state.book.imageLinks !== undefined ? `url(${this.state.book.imageLinks.thumbnail})`: 'url()' }}></div>
                    <BookShelfChanger value={this.state.book.shelf} moveBook={this.moveBookToShelf} />
                </div>
                <BookDetails title={this.state.book.title} authors={this.state.book.authors} />
            </div>

        )
    }
}

export default Book