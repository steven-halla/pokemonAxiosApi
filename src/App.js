import axios from 'axios';
// react is "export default"ed, useState is "export"ed from 'react'
import React, {useState, useEffect} from 'react';

import {PokemanButton} from './components/PokemanButton';
//import PokeView from './components/PokeView' // import whatever is "export default"ed from PokeView.
import {PokemanView} from './components/PokemanView' // import whatever is "export"ed from PokeView. Does not depend on "export default"

import './App.css';

// import logo from './logo.svg';

export const App = () => {
  // need to set state
  const [pokeman, setPokeman] = useState([]);

  // useEffect(() =>{
  //   axios.get('https:pokeapi.co/api/v2/pokemon?limit=1200')
  //   .then(response => {setPokeman(response.data.results)})

  // }, []);

  return (
    <div className="App">
      <PokemanButton setPokeman={setPokeman} />
      <PokemanView pokeman={pokeman} />
    </div>
  );
};