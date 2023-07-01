import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Greeting from './Greetings.jsx'

function App() {
  

  return (
    <>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
  )
}

export default App
