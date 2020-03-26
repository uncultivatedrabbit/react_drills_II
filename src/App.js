import React from 'react';
import './App.css';
import HelloWorld from '../src/state-drills/HelloWorld';
import Bomb from '../src/state-drills/Bomb'
import RouletteGun from '../src/state-drills/RouletteGun'

function App() {
  return (
    <div>
      <HelloWorld/>
      <Bomb/>
      <RouletteGun bulletInChamber={8}/>
    </div>
  );
}

export default App;
