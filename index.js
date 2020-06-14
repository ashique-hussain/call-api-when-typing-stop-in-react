import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

const App = () => {
  let typingTimer = null;

  const makeAnApiCall =(inputValue) => {
        console.log("Making an Ajax Call");
        window.alert('Making an Ajax Call');
    }
  
  const handleChange = (evt) => {
    const val = evt.target.value;
    console.log("value", val);
    clearTimeout(typingTimer);
    typingTimer = setTimeout(() => {
      if (val) {
        makeAnApiCall(val)
      }
    }, 500);
  }

  useEffect(() => {
    return () => {
      clearTimeout(typingTimer);
    }
  }, [])

    return (
      <div>
        <input type="text" onChange={handleChange} /> 
      </div>
    );
}

render(<App />, document.getElementById('root'));
