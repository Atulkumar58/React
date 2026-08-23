import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCounter]=useState(5)

  // let count =5;

  function addvalue() {
    if(count < 20)
    setCounter(count + 1);
    console.log(count);
  }
  function removevalue() {
    if(count>0)
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
