import { useState , useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [number_allowed, setNumber_allowed] = useState(false)
  const [char_allowed, setChar_allowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef= useRef(null)
  const passowrdGenerator = useCallback(() => {
    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (number_allowed) str += "0123456789";
    if (char_allowed) str += "!@#$%^&*()-+";
    
    for(let i=1; i<= length; i++){
      pass+= str.charAt(Math.floor(Math.random() * str.length));
    }
    setPassword(pass);

  }, [length, number_allowed, char_allowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password);
  }, [password])
  useEffect(() => {
    passowrdGenerator();
  }, [length, number_allowed, char_allowed, passowrdGenerator])

  return (
    <>
      
      <div className= 'w-full h-screen justify-center px-4 my-8 px-4 py-8  bg-gray-700'>
        <h1 className = 'text-white text-center my-4'>Password Generator</h1>
        
        <div className= 'flex shadow rounded-lg overflow-hidden mb-8 bg-gray-400' >
          <input
            type="text"
            value={password}
            ref={passwordRef}
            className='outline-none w-full px-3 py-1 text-gray-800'
          />
          <button
            className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4'
            onClick={copyPasswordToClipboard}
          >
            COPY
          </button>
        </div>
        <div className='flex justify-between items-center mb-4'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min="4"
              max="20"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className='w-full cursor-pointer'
            />
            
            <span className='text-white'>length: {length}</span>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            checked={number_allowed}
            onChange={(e) => setNumber_allowed(e.target.checked)}
            />
            <span className='text-white'>Numbers</span>
          </div>

          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            checked={char_allowed}
            onChange={(e) => setChar_allowed(e.target.checked)}
            />
            <span className='text-white'>Symbols</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
