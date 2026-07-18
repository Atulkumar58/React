import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  
  const [color, setcolor] = useState("olive");

  return (
    <>
        <div
        style= {{ backgroundColor: color, width: "100%", height: "100vw" }}>
            <div
            style={{display: "flex", justifyContent: "center", alignItems: "center", flexWrap: "wrap", height: "50px", bottom: "40px", backgroundColor: "gray"}}>
              
              <div>
                <button 
                onClick={() => setcolor("green")}
                  style = {{backgroundColor: "green", color: "white", border: "none", padding: "10px", margin: "5px", borderRadius: "5px"}}>
                  green
                </button>

                <button 
                onClick={() => setcolor("red")}
                  style = {{backgroundColor: "red", color: "white", border: "none", padding: "10px", margin: "5px", borderRadius: "5px"}}>
                  red
                </button>

                <button 
                onClick={() => setcolor("white")}
                  style = {{backgroundColor: "white", color: "black", border: "none", padding: "10px", margin: "5px", borderRadius: "5px"}}>
                  white
                </button>
                <button 
                onClick={() => setcolor("blue")}
                  style = {{backgroundColor: "blue", color: "white", border: "none", padding: "10px", margin: "5px", borderRadius: "5px"}}>
                  blue
                </button>
                <button 
                onClick={() => setcolor("yellow")}
                  style = {{backgroundColor: "yellow", color: "black", border: "none", padding: "10px", margin: "5px", borderRadius: "5px"}}>
                  yellow
                </button>
                <button 
                onClick={() => setcolor("aqua")}
                  style = {{backgroundColor: "aqua", color: "black", border: "none", padding: "10px", margin: "5px", borderRadius: "5px"}}>
                  aqua
                </button>
                <button 
                onClick={() => setcolor("orange")}
                  style = {{backgroundColor: "orange", color: "white", border: "none", padding: "10px", margin: "5px", borderRadius: "5px"}}>
                  orange
                </button>
              </div>
            </div>
        </div>
    </>
  )
}

export default App
