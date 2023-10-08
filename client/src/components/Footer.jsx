import React from 'react'
import './Footer.scss'
import sendIcon from './images/sendIcon.png'

const Footer = () => {
  return (
    <div id='footerContainer'>
      <div className='topFooter'>
        <div className='footerTopElem'>
          <div className='topSection'>
            <div className='topHeadings'>
              <span className='HeadingOne'>
                <h2>
                  Exclusive
                </h2>
              </span>
              <span className='HeadingTwo'>
                <h3>
                  Subscribe
                </h3>
              </span>
            </div>
            <div className='saleText'>
              <p>
                Get 10% off your first order
              </p>
            </div>
          </div>
          <div className='bottomSection'>
            <input type="text" placeholder='Enter your Email'/>
            <img src={sendIcon} alt="sendIcon" />
          </div>
        </div>
        <div className='footerTopElem'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div className='footerTopElem'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div className='footerTopElem'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
        <div className='footerTopElem'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</div>
      </div>
      <div className='bottomFooter'>
          <p>© Copyright Rimel 2022. All right reserved</p>
      </div>
    </div>
  )
}

export default Footer