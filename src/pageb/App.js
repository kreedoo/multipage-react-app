import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, I'm Page B.</p>
        <p><a href="/">Go back Home Page.</a></p>
        <p><a href="/pagea">Go to Page A.</a></p>
      </header>
    </div>
  );
}

export default App;
