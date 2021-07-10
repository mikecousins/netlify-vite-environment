import React from 'react'
import logo from './logo.svg'
import './App.css'

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>Commit Ref: {import.meta.env.VITE_COMMIT_REF}</p>
        <p>Netlify UI Variable: {import.meta.env.VITE_NETLIFY_UI}</p>
        <p>Not Netlify: {import.meta.env.VITE_NOT_NETLIFY}</p>
      </header>
    </div>
  )
}

export default App
