import React, { Component } from "react";
import BookShelfChanger from "./BookShelfChangerComponent";
import BookDetails from "./BookDetailsComponent";

class Book extends Component {

    state = {}

    render() {
        const {content} = this.props
        return (

            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${content.imageLinks.thumbnail})` }}></div>
                    <BookShelfChanger />
                </div>
                <BookDetails title={content.title} authors={content.authors} />
            </div>

        )
    }
}

export default Book