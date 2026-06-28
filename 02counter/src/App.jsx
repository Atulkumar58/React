import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let count =5;
  function addvalue() {
    count++;
    console.log(count+ "add value");
  }
  function removevalue() {
    count--;
    console.log(count+ "remove value");
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {count}</h2>

      <button
      onClick={addvalue}
      >Add Value</button> <br/>
      <button 
      onClick={removevalue}>remove Value</button>
    </>
  )
}

export default App
