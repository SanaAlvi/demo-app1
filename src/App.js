import React from 'react'; // we are importing React function from reat 
import './App.css';
//import Dinner from './Dinner.js'

function App() {
  return  (
    <div className="App">
      <Dinner dishName="Chicken Bariyani" sweetDish="Kheer" />

      <hr />
      <Dinner dishName="Chicken Bariyani" sweetDish="Kheer" />

      <hr />
      <Dinner dishName="Karhahi" sweetDish="Halwa" />

    </div>
  )
 }

export default App; //first we have to export then in other file it can be import
