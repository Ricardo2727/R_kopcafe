import React from 'react'
import './App.css'
import NavBar from "./component/NavBar/NavBar"




function App() {

// const condition =true

  return (
    <>
      <NavBar />
      {React.createElement ('p', {}, 'Esto es un parrafo')}      
      {/* {condition ? 'true': 'false'} */}
    
    
    
    </>
  )
}

export default App
