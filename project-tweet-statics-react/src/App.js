import React from 'react';
import logo from './logo.svg';
import Tweet from './Tweet';
import './App.css';

function App() {
  return (
    <div className="App">
        <Tweet name="Jon Smith" tweet="I am the true king." no="4"/> 
        <Tweet name="Adem Jho" tweet="This is random tweet." no="20"/> 
        <Tweet name="Richa Roy" tweet="Let's just celebrate" no="199"/>
        <Tweet name="Bajaj" tweet="My new course is available now." no="18"/>
    </div>
  );
}

export default App;
