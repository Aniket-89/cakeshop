import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
          Let`s celebrate life, one slice at a time! 🍰🎉

          </p>
        </div>
        <div className="footer-content-center">
          <h2>COMPANY</h2>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+1 (555) 123-4567</li>
            <li>info@cakepreneur.com</li>
            <div className="footer-social-icons">
              <a href="https://www.facebook.com" target="_blank">
                <img src={assets.facebook_icon} alt="" />
              </a>
              <a href="">
                <img src={assets.twitter_icon} alt="" />
              </a>
              <a href="">
                <img src={assets.linkedin_icon} alt="" />
              </a>
            </div>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright 2024 © Cakepreneur - All Right Reserved.
      </p>
    </div>
  );
};

export default Footer;
