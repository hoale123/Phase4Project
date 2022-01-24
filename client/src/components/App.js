
import React from "react"
import logo from './logo.svg';
import Header from './Header'
import ReviewsContainer from './ReviewsContainer'

import './App.css';




function App() {
  return (

   
    <div className="App">
        <Header></Header>
        <ReviewsContainer></ReviewsContainer>
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

      Hello World from HOA branch
      

    </div>
  );
}

export default App;
