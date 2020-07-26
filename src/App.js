import React from 'react';
import logo from './logo.svg';
import './App.css';
import Voter from './component/Voter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
    <Voter />
      </header>
    </div>
  );
}

export default App;
