import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import MyTextField from './components/MyTextField';
import TestState from './components/TestState';

function App() {
  return (
    <div className="App">
      <Header />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyTextField />
        <TestState />
        </header>
    </div>
  );
}

export default App;
