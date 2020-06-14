import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  //button event listner function 'btnClicked'
  //This function will get excuted evertime, when 'Click Me'button gets clicked.
  const  btnclicked = ()=> {
  alert('btn Clicked');
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <p>Welocme to my brand new react application</p>
        <button onClick={btnclicked}>Click Me</button>
      </header>
    </div>
  );
}

export default App;
