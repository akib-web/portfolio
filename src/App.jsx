import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import ChitChat from './tailwind-templates/ChitChat'
import Default from './components/Default'
import Nav from './tailwind-templates/Nav'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Nav />
      <ChitChat />
      
    </div>
  )
}

export default App
