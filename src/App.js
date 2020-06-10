import React, { useState } from 'react'; // we are importing React function from reat 
import './App.css';
import Dinner from './dinner.js'
import morning from './morning.js'

function App() {
  let [count,Countset]=useState(0)
  let [ismorning,setmorning]=useState(true)

  return  (
    <div className="App-header">
         <h1>Sana Alvi Shafqat</h1>
        <Dinner dishName="Karahi" sweetDish="Halwa" />
        <h3>The updated value is {count} </h3>
        <button onClick={()=> Countset(count+1)}>update State</button>
        <button onClick={()=> morning ? "Mrning" : "Night"}>
         Change Time 
        </button>
    </div>
  )
  
 }

export default App; //First we have to export then in other file it can be import
