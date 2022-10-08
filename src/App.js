import React from 'react'
import './App.css';
import ListOfGifs from './components/ListOfGifs'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'

import { Link, Route } from 'wouter'

function App() {

  return (
    <div className="App">
      <section className="App-content">
        <Link to='/'>
          <img className='App-logo' alt='Giffy logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Sign-check-icon.png/800px-Sign-check-icon.png' />
        </Link>
        <Route 
          component={Home}
          path="/"
        />
        <Route 
          component={SearchResults}
          path="/search/:keyword"
        />
        <Route 
          component={Detail}
          path="/gif/:id"
        />
      </section>
    </div>
  );
}

export default App;
