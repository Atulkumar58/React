
import Chai from './chai'
function App() {
  const username = "Atul Chaudhary"
  //we can only return evaluted expression in jsx 
  return (
    <>
     <h1>Welcome to Vite from React | {username}</h1>
    <Chai/>
    </>
    // <h1>Welcome to Vite from React | Atul Chaudhary</h1>
    // <><Chai/></>
    // <Chai/>
  )
}

export default App
