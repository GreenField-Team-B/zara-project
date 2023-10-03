import React, { useState } from 'react'
import Navbar from '../../components/navBar/Navbar.jsx'
import Footer from '../../components/Footer.jsx'
import image from './imgs/image.png'
import './login.scss'

const Login = () => {

    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

    const handleClick = () => {

    }

  return (
    <div id='loginPage'>
        <Navbar/>
        <div id="loginContainer">
            <div className='imgContainer'>
                <img src={image} alt="" />
            </div>
            <div className='dynamics'>
                <div className='headers'>
                    <h2>Log in to Exclusive</h2>
                    <h5>Enter your details below</h5>
                </div>
                <div id='inputs'>
                    <input type="text" onChange={(e) => setIdentifier(e.target.value)} placeholder='Email or Phone Number'/>
                    <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder='password'/>
                </div>
                <div className='bottomSection'>
                    <button className='loginBtn' onClick={handleClick}>Log in</button>
                    <h4>Forget password?</h4>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Login