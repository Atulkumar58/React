import React from 'react'
import ReactDOM from 'react-dom/client'

import App from './App.jsx'

function MyApp(){
  return (
    <>
     <h1>Welcome to Vite from React</h1>
    </>
  )
}

const anotherElement = (
  <a href="https://www.google.com" target="_blank"> Visit Google from the object </a>
)

 const reactElement = React.createElement(
    'a',
     {
        href: 'https://www.google.com',
        target: '_blank'
    },
      'Click here to go to Google'
    )
  //attributes of createElement are tagname, object of attributes, children
ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    {/* <MyApp /> */}
    <App />
    {/* {anotherElement}
    <br />
    {reactElement} */}
  </>
  
)
