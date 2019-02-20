import React, { Component } from "react";
import  * as BooksAPI from "../../BooksAPI";
import BookList from "../Book/BookListComponent";
import SearchBar from "./SearchBarComponent";

class Search extends Component {

    state = {
        searchQuery: '',
        timeoutSearch: 0,
        books: [],
        booksOnShelf: []
    }


    componentDidMount(){
        BooksAPI.getAll().then(res =>{
            this.setState({
                booksOnShelf: res,
            })

        })

    }

    handleSearchInput = (query) =>{
        if(this.state.timeoutSearch){
            clearTimeout(this.state.timeoutSearch)
        }

        this.setState({
            searchQuery: query,
            timeoutSearch: setTimeout(() =>{
               this.searchBooks(query)
            }, 2000),
        })
    }

    searchBooks(query){
        if(query !== ''){

            BooksAPI.search(query).then(res =>{
                if(!res.error){
                    this.setState({
                        books: res,
                    });
                    this.setBooksShelfs();
                }else{
                    this.setState({
                        books: [],
                    });
                }

            });

        }else{
            this.setState({
                books: [],
            });
        }


    }

    setBooksShelfs = () =>{
        this.setState({
            books: this.state.books.map(book => {

                const bookOnShelf = this.state.booksOnShelf.find(shelfBook => book.id ===  shelfBook.id)

                if(bookOnShelf){
                    book.shelf = bookOnShelf.shelf;
                }else{
                     book.shelf = 'none';
                }
                return book;
             }),
        });

    }


    render() {
        const { searchQuery } = this.state;

        return (
            <div className="search-books">
                <SearchBar searchQuery={searchQuery} handleSearchInput={this.handleSearchInput}/>
            <div className="search-books-results">
              <BookList books={this.state.books}/>
            </div>
          </div>

        )
    }
}

export default Search