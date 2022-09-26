import React, { useState } from 'react'
import './App.css';

function App() {
  const [value, updateValue]= useState(['https://media1.giphy.com/media/Q7SJReD3cqhql567za/giphy.gif?cid=ecf05e472qmixbzyppf65w1we36zjry6xbu7jq8x9137anm0&rid=giphy.gif&ct=g'])

  return (
    <div className="App">
      <section className="App-content">
       <img src={value} />
      </section>
    </div>
  );
}

export default App;
