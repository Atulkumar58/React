import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import Card from './components/card'

import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const obj = {
    name: 'Atul',
    age: 22,
    city: 'Bangalore'
  }
  let array = [1, 2, 3, 4, 5]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind Test</h1>
      import React from 'react'
  
      <Card userName='chai or code' /><br /><br/>
      <Card userName='Atul' />
    </>
  )
}

export default App
