import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square'
import Hideable from './Hideable'

const HideableSquare = Hideable(Square)

class App extends React.Component {
  render() {
    return (
      <div>
        <Square size={100} />
        <HideableSquare isHidden={true} size={100} color='green' />
        <HideableSquare isHidden={false} size={100} color='red' />
      </div>
    )
  }
}

export default App;
