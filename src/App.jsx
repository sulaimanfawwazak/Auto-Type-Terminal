import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Terminal from './components/Terminal'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='container items-center mx-auto w-96'>
      <div className=''>
        <Terminal/>
      </div>
    </div>
  )
}

export default App
