import logo from './logo.svg';
import './App.css';
import toReverseBinary from './reverseBinary';
import { useState, useEffect } from 'react';
import { isCompositeComponent } from 'react-dom/test-utils';

function App() {
  const handleSubmit = () => {
    console.log("hi");
    console.log(document.getElementById("submission").value);
  }
  return (
    <div className="App">
        <input type="text" name="submission" id="submission" placeholder='integer here'/>
        <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}


export default App;
