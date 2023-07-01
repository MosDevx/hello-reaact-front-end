import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Routes , Route} from 'react-router-dom'
import Greeting from './Greetings.jsx'
import {Routes , Route} from 'react-router-dom'
import Greeting from './Greetings.jsx'

function App() {
  
  

  return (
<<<<<<< Updated upstream
    <>
      <Routes>
        <Route path="/" element={<Greeting />} />
      </Routes>
    </>
=======
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
>>>>>>> Stashed changes
  )
}

export default App
