import React, { useState } from 'react'; // we are importing React function from reat 
import './App.css';
import Dinner from './dinner.js'

function App() {
  let [count,Countset]=useState(0)
  return  (
    <div className="App-header">
         <h1>Sana Alvi Shafqat</h1>
        <Dinner dishName="Karahi" sweetDish="Halwa" />
        <button onClick={()=> Countset(count+1)}>update State</button>
    </div>
  )
  
 }

export default App; //First we have to export then in other file it can be import
