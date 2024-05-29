import React from "react";
import "./AboutUs.css";
import Header from '../../components/Header/Header'
// import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const AboutUs = () => {
  return (
    <div>
      <Header/>
      <div className="head-section about-container">
        <div className="info-container">
          <img src={assets.header} alt="" />
          <div className="cont">
            <h3 className="heading">About Us</h3>
            <p className="text">
              Welcome to Cakepreneur, where every cake tells a unique story! Our
              journey began when our founder, passionate about baking, decided to
              turn her love for cakes into a business.
            </p>
          </div>
        </div>
      </div>
      <div className="story about-container">
      <div className="info-container story-img-right">
          <img src={assets.header} alt="" />
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
      </div>
      <div className="mission about-container">
        <div className="info-container">
          <img src={assets.header} alt="" />
          <div className="cont">
            <h3 className="heading">Our Mission</h3>
            <p className="text">
              At Cakepreneur, we believe that every celebration deserves a cake
              that reflects the joy and love shared during those moments. Our
              mission is to create personalized, delectable cakes that become part
              of your cherished memories.
            </p>
          </div>
          
        </div>
      </div>
      <div className="value">
        <div className="info-container story-img-right">
          <img src={assets.header} alt="" />
          <div className="cont">
            <h3 className="heading">Our Values</h3>
            <ol className="text">
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
      </div>
      <div className="founder">
        <div className="info-container">
          <div className="cont">
            <h3 className="heading">Meet Our Founders</h3>
        
              <ul className="founder-img info-container">
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