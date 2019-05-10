import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header jumbotron">
        <img src={logo} className="App-logo" alt="logo" />
        <br></br>
        <div className='App-text'>
          <h3> NationBuilder </h3>
          <h5>Frontend Technical Test</h5>
        </div>
      </header>
    </div>
  );
}

export default App;
