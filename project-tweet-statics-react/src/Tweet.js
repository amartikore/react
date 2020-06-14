import React from 'react';
import './App.css';

function Tweet({name, tweet, no}){
    return(
        <div className='Tweet-box'>
            <h5>Name : {name}</h5>
            <p>{tweet}</p>
            <h5>No of likes : {no}</h5>           
        </div>
    );
};


export default Tweet;