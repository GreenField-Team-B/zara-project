import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/auth/Login.jsx'
import axios from 'axios'

const App = () => {


  const handleLogin = async (user) => {
    try {
      const response = await axios.post('http://127.0.0.1:5000/api/user/login', user)
      console.log(response)
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login handleLogin={handleLogin}/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App