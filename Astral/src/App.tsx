import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.scss'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <img src={reactLogo} className="App-logo" alt="logo" />
        <p>
            Au au
        </p>
        </header>
    </div>
  )
}

export default App
