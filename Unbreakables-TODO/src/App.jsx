import { useState } from 'react'
import './App.css'
import TasksPage from './pages/TasksPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TasksPage />
    </>
  )
}

export default App
