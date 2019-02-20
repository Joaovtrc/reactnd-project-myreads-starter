import React from "react";
import BookList from "../Book/BookListComponent";

const Shelf = (props) => (

    <div className="bookshelf">
        <h2 className="bookshelf-title">{props.content.title}</h2>
        <div className="bookshelf-books">

            <BookList books={props.content.books} updateShelfs={props.updateShelfs}/>


        </div>
    </div>

)

export default Shelf