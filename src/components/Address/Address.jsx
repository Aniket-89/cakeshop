import React from 'react'
import './Address.css'
import { assets } from "../../assets/assets"

const Address = () => {
  return (
    <>
    <div className='address-section'>
      <h3 className="heading">Our Address</h3>
      <ul className="contact-info">
        <li>CakePreneur</li>
        <li>Xyz block, City, District, State, xxxxxx</li>
        <li>+1 (555) 123-4567.</li>
        <li>info@cakepreneur.com</li>
      </ul>
      <div className="footer-social-icons">
              <a href="https://www.facebook.com" target="_blank" rel='noreferrer'>
                <img src={assets.facebook_icon} alt="" />
              </a>
              <a href="">
                <img src={assets.twitter_icon} alt="" />
              </a>
              <a href="">
                <img src={assets.linkedin_icon} alt="" />
              </a>
        </div>
    </div>
    </>

  )
}

export default Address
