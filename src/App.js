import React, { useState } from 'react'; // we are importing React function from reat 
import './App.css';
// import Dinner from './dinner.js'
import {Message} from './morning.js'

export default function App() {
  let [count,setCount]=useState(0);
  let [isMorning,setMorning]=useState(true)

  return  (
    <div className={"App-header ${isMorning ? 'App' : ''}"}>
         <h1>Sana Alvi</h1>
         <h3>Good {isMorning ? "Morning" : "Night"} </h3>
         <Message counter={count}/>
          
         <br />
         
         <button onClick={() => setCount(count + 1)}>
           increment Counter
         </button>

         <br />
         
         <button onClick={() => setCount(count + 1)}>
           decrement Counter
         </button>
        
      
         
         <button onClick={() => setMorning(!isMorning)}>
         Change Time 
         </button>
         
    </div>
  )
  
 }

//</div>export default App; //First we have to export then in other file it can be import
