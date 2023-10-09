import React from 'react';
import image from './imgs/image.png'
import "./register.css"
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/navBar/Navbar.jsx';
import Footer from '../../components/Footer.jsx';

const Register = ({registerNow}) => {

  const navigate = useNavigate()

   let body = {}
   body.role = "client"

   const validateInput = (obj) => {
    // Regular expressions for email and telephone number patterns
    const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
    const phonePattern = /^\d{8,}/;
   if(!emailPattern.test(obj.email)){
    obj.phone_number = obj.email 
    obj.email = null
    if(!phonePattern.test(obj.phone_number)){
      obj.phone_number = null
      return navigate('/login')
    } 
    else{
      return navigate('/login')
    }
   }
  
  }

  return (
    <div>
      <Navbar/>
      <div className="container1">
        <div className="left">
          <img src= {image} alt="tlifoun" />
        </div>
        <div className="right">
          <h2>Create an account</h2>
          <h5>Enter your details below</h5>
            <div className="group">
              <input type="text" required  onChange={(e)=> body.username = e.target.value}/>          {/*username, email, phone_number, password, role*/}
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Name</label>
            </div>
            <div className="group">
              <input type="text" required  onChange={(e)=> body.email = e.target.value } />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Email</label>
            </div>
            <div className="group">
              <input type="password" required onChange={(e)=> body.password = e.target.value} />
              <span className="highlight"></span>
              <span className="bar"></span>
              <label>Password</label>
            </div>
            <button className="Creat-btn" onClick={()=>{ validateInput(body); registerNow(body);console.log(body)}  }>Create an account</button>
            <br />
            <br />
            <button className="google-btn">Sign Up with Google</button>
          
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Register;
