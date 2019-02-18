import React, { Component } from "react";
import { Link } from "react-router-dom";
import Shelf from "./ShelfComponent";
import  * as BooksAPI from "../../BooksAPI";

class ShelfList extends Component {

    state = {
      shelfs : [
        {title:'Currently Reading',books: []},
        {title:'Want to Read',books: []},
        {title:'Read',books: []},

      ],
    }

    asignShelfs = (books) => {

      this.setState(()=>({
        shelfs: [
          {title:'Currently Reading',books: books.filter(book => book.shelf === 'currentlyReading')},
          {title:'Want to Read', books: books.filter(book => book.shelf === 'wantToRead')},
          {title:'Read', books: books.filter(book => book.shelf === 'read')},

        ]
      }))
    }

    updateShelfs = () => {
      this.getAllBooks();
    }

    getAllBooks = () => {
      BooksAPI.getAll().then(allBooks =>{
        this.asignShelfs(allBooks);
      });
    }

    componentDidMount(){
      this.getAllBooks();
    }





    render() {
        return (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {this.state.shelfs.map((shelf)=>
                  <Shelf key={shelf.title} content={shelf} updateShelfs={this.updateShelfs}/>
                )}
              </div>
            </div>

            <Link className="open-search" to='/search'>Add a book</Link>
          </div>

        )
    }
}

export default ShelfList