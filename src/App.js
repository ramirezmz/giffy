import React, { useState, useEffect } from 'react'
import './App.css';
import getGifs from './services/getGifs';

function App() {
  const [gifs, setGifs]= useState([])
  
  useEffect(function () {
    getGifs({ keyword: 'futbol'}).then(gifs => setGifs(gifs))
  }, [])

  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map((singleGif, index) => <img src={singleGif} key={index}/>)
        }
        <button >Change gifs</button>
      </section>
    </div>
  );
}

export default App;
