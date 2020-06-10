import React, { useState } from 'react'; // we are importing React function from reat 
import './App.css';
//import Dinner from './dinner.js'
import {morning} from './morning.js'

function App() {
  let [count,Countset]=useState(0)
  let [ismorning,setmorning]=useState(true)

  return  (
    <div className="App-header">
         <h1>Sana Alvi Shafqat</h1>
        
        <morning counter={count} />

        <button onClick={()=> Countset(count+1)}>
          update State
          </button>
        <br />
      
        <h3>Good {ismorning ? "Morning" : "Night"} </h3>
        <button onClick={()=> setmorning(!ismorning) }>
         Change Time 
        </button>
    </div>
  )
  
 }

export default App; //First we have to export then in other file it can be import
