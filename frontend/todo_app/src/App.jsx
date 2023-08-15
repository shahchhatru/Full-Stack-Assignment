import { useState } from 'react'
import { TaskCard } from './components'
import { Route, Routes } from 'react-router-dom';

import './App.css'
import Todoapp from './components/Todoapp/Todoapp';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Routes>
      <Route path="/" element={<Todoapp/>}/>
    </Routes>
      
    </>
  )
}

export default App
