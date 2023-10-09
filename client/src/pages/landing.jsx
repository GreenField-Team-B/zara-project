import React from 'react'
import Navbar from '../components/navBar/Navbar.jsx'
import AllProducts from '../components/AllProducts.jsx'
import Footer from '../components/Footer.jsx'

const Landing = () => {
  return (
    <div>
      <Navbar/>
      <AllProducts/>
      <Footer/>
    </div>
  )
}

export default Landing