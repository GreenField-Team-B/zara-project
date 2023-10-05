import React from 'react'
import "./nav.css"

const Navbar = () => {
  return (
    <div>  <div className="header">
      <div className="promo">
        <div className="promo-text">
          Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!
        </div>
        <div className="shop-now">Shop Now</div>
      </div>
      <div className="language">
        <div className="language-text">English</div>
        <div className="arrow-icon">
          <div className="arrow-bar"></div>
        </div>
      </div>
    </div>
      <div className="container">
        <div className="header1">
          <div className="nav">
            <div className="exclusive">
              <div className="exclusive-title">Exclusive</div>
            </div>
            <div className="elments">
              <div className="nav-item">Home</div>
              <div className="nav-item">Contact</div>
              <div className="nav-item">About</div>
              <div className="nav-item">Sign Up</div>
            </div>
            <div className="search-bar">
              <input id="search-label" placeholder="What are you looking for?" />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Navbar;