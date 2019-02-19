import React from "react";
import Book from "./BookComponent";

const BookList = (props) =>(
    <ol className="books-grid">

    {props.books.map(book =>
        <li key={book.id}>
          <Book content={book} updateShelfs={props.updateShelfs}/>
        </li>
    )}

</ol>
);

export default BookList;