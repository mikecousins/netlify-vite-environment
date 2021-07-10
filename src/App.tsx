import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>Commit Ref: {import.meta.env.VITE_COMMIT_REF}</p>
        <p>Netlify UI Variable: {import.meta.env.VITE_NETLIFY_CUSTOM}</p>
      </header>
    </div>
  )
}

export default App
