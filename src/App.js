import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Running react application on GitHub pages.
        </p>
        <a
          className="App-link"
          href="https://github.com/diegoinacio/gh-pages-test"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit the repository
        </a>
      </header>
    </div>
  );
}

export default App;
