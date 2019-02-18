import React from "react";

const BookDetails = (props) =>(
    <div>
        <div className="book-title">{props.title}</div>
        <div className="book-authors">
        {
            props.authors.map(aut =>(
               <p>{aut}</p>
            ))
        }
       </div>
    </div>
);

export default BookDetails;