import React from 'react'
import './AboutUs.css';
// import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';
import { assets } from '../../assets/assets';
const AboutUs = () => {
  return (
    <div>
        <div className="head-section about-container">
<div className="cont">
    
            <h3 className="heading">About Us</h3>
            <p className="desc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            </p>
</div>
            <img src={assets.app_store} alt="" />

        </div>
        <div className="story about-container">
            <img src={assets.app_store} alt="" />
            <div className="cont">

            <h3 className="heading">Our Story</h3>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum repellat unde nesciunt ipsa eum in eius. Voluptas, minima nam hic dicta vitae vero quod, reiciendis obcaecati asperiores velit dignissimos.</p>
            </div>
        </div>
        <div className="mission about-container">
            <div className="cont">

            <h3 className="heading">Our Mission</h3>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum repellat unde nesciunt ipsa eum in eius. Voluptas, minima nam hic dicta vitae vero quod, reiciendis obcaecati asperiores velit dignissimos.</p>
            </div>
            <img src={assets.app_store} alt="" />

        </div>
        <div className="story about about-container">
            <img src={assets.app_store} alt="" />
            <div className="cont">

            <h3 className="heading">Our Vision</h3>
            <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat cum repellat unde nesciunt ipsa eum in eius. Voluptas, minima nam hic dicta vitae vero quod, reiciendis obcaecati asperiores velit dignissimos.</p>
            </div>

        </div>

    </div>
  )
}

export default AboutUs
