import React, { useState } from 'react'
import { Link, useLocation } from 'wouter'
const POPULAR_GIFS = ["Matrix", "Peru", "Brasil", "Thor"]

function Home() {
  const [keyword, setKeyword] = useState('')
  const location = useLocation()
  console.log(location)
  
  const handeSubmit = event => {
    event.preventDefault()
    //navegar outra rota
    console.log(keyword)
  }
  const handleChange = event => {
    setKeyword(event.target.value)
  }

  return (
    <div>
      <form onSubmit={handeSubmit}>
        <input onChange={handleChange} type="text" value={keyword} />
      </form>
      <h3 className='App-title'>Los gifs más populares</h3>
      <ul>
      {POPULAR_GIFS.map((popularGif) => (
        <li key={popularGif}>
          <Link 
            to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Home