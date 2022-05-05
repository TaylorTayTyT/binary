
import './App.css';
import toReverseBinary from './reverseBinary';
import { useState, useEffect } from 'react';
import { Container } from "@material-ui/core";

function App() {
  const [reload, setReload] = useState(false);
  const handleSubmit = () => {
    setReload(!reload);
  }
  let a = (<></>);
  if (document.getElementById("submission")) {
    //creates the binary and reverses it
    let inputtedValue = parseInt(document.getElementById("submission").value);
    let reversedBinary = toReverseBinary(inputtedValue);
    let reversedBinaryInt = parseInt(reversedBinary, 2);

    if(reversedBinaryInt != 0 && !reversedBinaryInt) {
      reversedBinaryInt = "";
      reversedBinary = "Invalid Input";
    } 

    a = (
      <div>
        <h1> reversedBinary: {reversedBinary} </h1>
        <h1> Integer value: {reversedBinaryInt}</h1>
      </div>
    );
  }

  return (
    <div className="App">
      <div className='header'>
        <div className='title'> 
          <h1>Reverse Binomial Calculator</h1>
        </div>
      </div>
      
      <input type="text" name="submission" id="submission" placeholder='integer here' />
      <br></br>
      <button onClick={handleSubmit} name = "submit">Submit</button>
      {a}
    </div>
  );
}


export default App;
