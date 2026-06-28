import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

import heroImg from './assets/hero.png'
import './App.css'

function App() {

  const [count, setCounter]=useState(15)

  // let count =5;

  function addvalue() {
    setCounter(count + 1);
    console.log(count);
  }
  function removevalue() {
    setCounter(count - 1);
    console.log(count);
  }
  return (
    <>
      <h1>Counter App</h1>
      <h2>Counter Value: {count}</h2>
      
      <button
      onClick={addvalue }
      >Add Value {count}</button> <br/>
      <button 
      onClick={removevalue}>remove Value {count}</button>
    </>
  )
}

export default App
