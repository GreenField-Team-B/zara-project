import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/auth/Login.jsx'

const App = () => {


  const handleLogin = (user) => {
    console.log(user)
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App