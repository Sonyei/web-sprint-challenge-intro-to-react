import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { BASE_URL } from './constants'
import Character from './components/Character'
import styled from 'styled-components'
import './App.css';

const App = () => {
  const [char, setChar] = useState([])
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.


useEffect(() => {

axios.get(`${BASE_URL}`)
.then(res => {
  setChar(res.data.results)
  })
.catch(err => {
  console.log('This is the error -->', err)
  })
}, [])

    return (
    <div className="App">
      <h1 className="Header">Rick & Morty Toons</h1>
      <div className="characters">
        {char.map(char => {
          return (
            <Character name= {char.name} gender= {char.gender} species= {char.species} origin= {char.origin.name} location={char.location.name} status= {char.status} image= {char.image} key={char.id}/>
          );
        })}
      </div>
    </div>
    )
}


export default App;