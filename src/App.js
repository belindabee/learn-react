import React from 'react';
import logo from './logo.svg';
import './App.css';
import Square from './Square'

class App extends React.Component {
  render() {
    return (
      <div>
        <Square size={200} color='blue' />
      </div>
    )
  }
}
export default App