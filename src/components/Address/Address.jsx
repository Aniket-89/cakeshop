import React from 'react'
import { assets } from "../../assets/assets"

const Address = () => {
  return (
    <div>
      <h3 className="heading">Our Address</h3>
      <ul className="contact-info">
        <li>CakePreneur</li>
        <li>Xyz block, City, District, State, xxxxxx</li>
        <li>937298xxx</li>
        <li>abc@email.com</li>
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
  )
}

export default Address
