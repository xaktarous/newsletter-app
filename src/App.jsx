import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Success from './pages/Success'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <BrowserRouter>
     <Routes>
      <Route index element={<Home/>}/>
      <Route path='/success' element={<Success/>}/>
     </Routes>
    </BrowserRouter>
    </div>
  )
}

export default App
