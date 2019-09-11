import React from 'react';
import logo from './logo.svg';
import './App.less';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello, I'm Home Page.</p>
        <p><a href="/pagea">Go to Page A.</a></p>
        <p><a href="/pageb">Go to Page B.</a></p>
      </header>
    </div>
  );
}

export default App;
