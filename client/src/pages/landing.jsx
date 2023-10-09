import React from 'react'
import Navbar from '../components/navBar/Navbar'
import AllProducts from '../components/AllProducts'
import Footer from '../components/Footer'

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