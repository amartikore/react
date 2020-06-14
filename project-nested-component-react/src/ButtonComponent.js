import React from 'react';
import logo from './logo.svg';
import './App.css';

function ButtonComponent() {
    const buttonClick = ()=>{
        alert('button Clicked');
    };
    return (
        <div>
            <h3>This is the nested button component</h3>
            <img src={logo} className="App-logo" alt="logo" />       
            <p>Welocme to my brand new react application</p>
            <button onClick={buttonClick}>Click Me</button> 
        </div>
    );
};

export default ButtonComponent;
