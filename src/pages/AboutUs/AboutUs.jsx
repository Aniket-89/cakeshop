import React from "react";
import "./AboutUs.css";
// import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";
const AboutUs = () => {
  return (
    <div>
      <div className="head-section about-container">
        <div className="cont">
          <h3 className="heading">About Us</h3>
          <p className="desc">
            Welcome to Cakepreneur, where every cake tells a unique story! Our
            journey began when our founder, passionate about baking, decided to
            turn her love for cakes into a business.
          </p>
        </div>
        <img src={assets.app_store} alt="" />
      </div>
      <div className="story about-container">
        <img src={assets.app_store} alt="" />
        <div className="cont">
          <h3 className="heading">Our Story</h3>
          <p className="text">
            Cakepreneur was born out of a kitchen filled with flour, sugar, and
            dreams. Our founder, Jane, started baking custom cakes for friends
            and family. Word spread, and soon she was creating masterpieces for
            weddings, birthdays, and celebrations. Driven by her passion, Jane
            assembled a team of talented cake artists, and Cakepreneur was
            officially launched.
          </p>
        </div>
      </div>
      <div className="mission about-container">
        <div className="cont">
          <h3 className="heading">Our Mission</h3>
          <p className="text">
            At Cakepreneur, we believe that every celebration deserves a cake
            that reflects the joy and love shared during those moments. Our
            mission is to create personalized, delectable cakes that become part
            of your cherished memories.
          </p>
        </div>
        <img src={assets.app_store} alt="" />
      </div>
      <div className="story about-container">
        <img src={assets.app_store} alt="" />
        <div className="cont">
          <h3 className="heading">Our Values</h3>
          <ol>
            <li>
              <strong>Creativity:</strong> We thrive on turning imagination into
              edible art.
            </li>
            <li>
              <strong>Quality:</strong> Only the finest ingredients make it into
              our ovens.
            </li>
            <li>
              <strong>Community:</strong> We`re more than a bakery; we`re a
              cake-loving family.
            </li>
            <li>
              <strong>Customer Happiness:</strong> Your smiles are our ultimate
              reward.
            </li>
          </ol>
        </div>
      </div>
      <div className="founder about-container">
        <div className="cont">
          <h3 className="heading">Our Founders</h3>
            <div className="">
                <ul className="founder-img about-container">
                    <li><img src={assets.logo} alt="" /></li>
                    <li><img src={assets.logo} alt="" /></li>
                    <li><img src={assets.logo} alt="" /></li>
                </ul>
            </div>
        </div>
        
      </div>
    </div>
  );
};

export default AboutUs;
