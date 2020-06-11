import React, { useState } from 'react'; // we are importing React function from reat 
import './App.css';
import Dinner from './dinner.js'
//import {morning} from './morning.js'

function App() {
  let [count,setCount]=useState(0);
  let [ismorning,setmorning]=useState(true)

  return  (
    <div className={"App-header ${ismorning ? 'App' : ''}">
         <h1>Muhammad Arsalan Bajwa</h1>
         <Dinner dishName="Karahi" sweetDish="Halwa" />
         <br />
         
         <h3>Counter is updated {count}</h3>
         <br />
   
         <button onClick={() => setCount(count + 1)}>
           Update Counter
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
