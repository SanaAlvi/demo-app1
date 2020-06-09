import React from 'react'; // we are importing React function from reat 
import './App.css';
import Dinner from './dinner.js'

function App() {
  return  (
    <div className="App-header">
         <h1>Sana Alvi Shafqat</h1>
        <Dinner dishName="Karahi" sweetDish="Halwa"  className="App" />
    </div>
  )
 }

export default App; //first we have to export then in other file it can be import
