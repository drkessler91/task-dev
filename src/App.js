import './App.css';
import * as React from 'react';
import { useState } from "react";



export default function App() {
  const [textInput, setTextInput] = useState("");
  const [listItems, setListItems] = useState([]);

  const [trnInput, setTrnInput] = useState("");
  const [trnlistItems, setTrnListItems] = useState([]);
  return (
    <div className="App" >
        
        <h1 class = "App-title">
           Build a workflow
        </h1>
        <div className = "App-row">
          <div class = "column">

            <div>
            Add status:

              <input type="text" value={textInput} onChange={(e) => setTextInput(e.target.value)} />
              
              <button onClick={() => {
                setListItems([...listItems, textInput]);
                setTextInput("");
              }}>Add </button>
              <ul>
                {listItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

          </div>

          <div class = "column">
            <p className="App-trn">
              Add transition:
            </p>
            name:
            <input type="text" value={trnInput} onChange={(e) => setTrnInput(e.target.value)} />
              
              <button onClick={() => {
                setTrnListItems([...trnlistItems, trnInput]);
                setTrnInput("");
              }}>Add </button>
              <ul>
                {trnlistItems.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            

            From:
            To:

          </div>
        
            <button className="App-reset_btn" type = "reset">
              Reset
            </button>

        </div>
      
    </div>
  );
}




