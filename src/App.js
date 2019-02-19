import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import ShelfList from './components/Shelf/ShelfListComponent';
import Search from './components/Search/SearchComponent';

class BooksApp extends React.Component {
  state = {

  }

  render() {
    return (
      <div className="app">
        <Route  path='/search' render={() => (
          <Search />
        )} />

        <Route exact path='/' render={() => (
          <ShelfList />
        )} />


      </div>
    )
  }
}

export default BooksApp
