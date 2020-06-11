import React, { useState } from 'react'; // we are importing React function from reat 
import './App.css';
import Dinner from './dinner.js'
import {Message} from './morning.js'

function App() {
  let [count,setCount]=useState(0);
  let [isMorning,setMorning]=useState(true)

  return  (
    <div className={`App ${!isMorning ? 'App-header' : ''}`}>
  
         <h1 className="Sana">Sana Alvi</h1>
            
         <Dinner dishName="Bariyani" sweetDish="Halwa" />

         <h3>Good {isMorning ? "Morning" : "Night"} </h3>
         <Message counter={count}/>
         <button onClick={() => setMorning(!isMorning)}>
         Change Time 
         </button>


         <br />
         
         <button onClick={() => setCount(count + 1)}>
           increment Counter
         </button>
         
         <button onClick={() => setCount(count - 1)}>
           decrement Counter
         </button>
          <br />
         
         <button onClick={()=> setCount(count = 0)}>
          Reset counter
         </button>
         
         <button onClick={() => setCount(count*2)}>
           Multiply 2
         </button>
         <button onClick={() => alert("Button Pressed")}>
           See Alert
         </button>

    </div>
  )
  
 }
export default App; //First we have to export then in other file it can be import
