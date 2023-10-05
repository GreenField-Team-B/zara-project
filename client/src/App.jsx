import React, { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/auth/Login.jsx'
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { setUser } from './redux/userSlice.js'; // Import the setUser action

const App = () => {
const dispatch = useDispatch();

  const handleSetUser = (userObj) => {
    const user = userObj;
    dispatch(setUser(user)); // Dispatch the setUser action with user data
  };
  const setCookie = (cookieName, cookieValue, expirationDays) => {
    const d = new Date();
    d.setTime(d.getTime() + (expirationDays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  }

  const deleteCookies = (cookieName) => {
    document.cookie = `${cookieName}=; expires=Thu, 11 Sep 2001 00:00:00 UTC;`;    
  }
  
  const handleLogin = async (user) => {
    try {
      if(isNaN(user.identifier)) {
        var endPoint = "loginByEmail"
        user = {email: user.identifier, password: user.password}
      } else {
        var endPoint = "loginByPhoneNumber"
        user = {phone_number: user.identifier, password: user.password}
      }
      const response = await axios.post(`http://127.0.0.1:5000/api/user/${endPoint}`, user)
      setCookie('token', response.data, 30)
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