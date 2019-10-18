import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square'
import SimpleSquare from './SimpleSquare'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
     <Square size={100} color='red' />
    </div>
  );
}

export default App;
