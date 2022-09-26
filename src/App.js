import React, { useState } from 'react'
import './App.css';

const GIFS = ['https://media3.giphy.com/media/lqLNp3dJlWihNuhegE/giphy.gif?cid=ecf05e472qmixbzyppf65w1we36zjry6xbu7jq8x9137anm0&rid=giphy.gif&ct=g', 'https://media1.giphy.com/media/4womxruW94yFHNMgj4/giphy.gif?cid=ecf05e47plz7nqvj9jl1yu542fpq0exvhcs2hel24mr7n4sg&rid=giphy.gif&ct=g']
function App() {
  const [gifs, setGifs]= useState(GIFS)
  
  const DIFFERENT_GIG = ['https://media3.giphy.com/media/5hrj42zCA1RoA/giphy.gif?cid=ecf05e47nt9ay4z3w5wrjpdtqjfiejmub5odg2yx4hbebif1&rid=giphy.gif&ct=g']
  return (
    <div className="App">
      <section className="App-content">
        {
          gifs.map(singleGif => <img src={singleGif}/>)
        }
        <button onClick={() => setGifs(DIFFERENT_GIG)}>Change gifs</button>
      </section>
    </div>
  );
}

export default App;
