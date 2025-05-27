import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
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
