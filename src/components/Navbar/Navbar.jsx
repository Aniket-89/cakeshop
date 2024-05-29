import React, { useContext, useState } from 'react'
import  './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../../Context/StoreContext'
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [menu, setMenu] = useState("home");
    const [menuOpen, setMenuOpen] = useState(false);
    const { getTotalCartAmount } = useContext(StoreContext);
  
    const handleWhatsapp = () => {
      const phoneNumber = '6370570615'; // Replace with your phone number
      const message = `Hello, I want to order a custom cake. I have an idea for it.`;
      const encodedMessage = encodeURIComponent(message);
      const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
  
      window.open(whatsappUrl, '_blank');
    };
  
    const toggleMenu = () => {
      setMenuOpen(!menuOpen);
    };
  
  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to="/" onClick={()=>setMenu("home")} className={`${menu==="home"?"active":""}`}>Home</Link>
        <Link to="/aboutus" onClick={()=>setMenu("aboutus")} className={`${menu==="aboutus"?"active":""}`}>About Us</Link>
        
        <a href='#footer' onClick={()=>setMenu("contact")} className={`${menu==="contact"?"active":""}`}>contact us</a>
      </ul>
      <ul className={`navbar-menu-m ${menuOpen? 'active' : ''}`} style={menuOpen? { display: 'flex' } : { display: 'none' }}>
        <Link to="/" onClick={() => { setMenu("home"); setMenuOpen(false); }} className={`${menu === "home"? "active" : ""}`}>Home</Link>
        <Link to="/aboutus" onClick={() => { setMenu("aboutus"); setMenuOpen(false); }} className={`${menu === "aboutus"? "active" : ""}`}>About Us</Link>
        <Link to="/contact-us" onClick={() => { setMenu("contact-us"); setMenuOpen(false); }} className={`${menu === "contact-us"? "active" : ""}`}>Contact Us</Link>
        <button className='whatsapp-btn' onClick={handleWhatsapp}>Submit your ideas</button>
      </ul>
      <div className="navbar-right">
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.basket_icon} alt="" />
          <div className={getTotalCartAmount()>0?"dot":""}></div>
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen? <FaTimes /> : <FaBars />}
        </div>
        <button className='whatsapp-btn mobile-hide' onClick={handleWhatsapp}>Submit your ideas</button>

      </div>
    </div>
  )
}

export default Navbar

// import React, { useContext, useState } from 'react';
// import './Navbar.css';
// import { assets } from '../../assets/assets';
// import { Link } from 'react-router-dom';
// import { StoreContext } from '../../Context/StoreContext';
// import { FaBars, FaTimes } from 'react-icons/fa';

// const Navbar = () => {
//   const [menu, setMenu] = useState("home");
//   const [menuOpen, setMenuOpen] = useState(false);
//   const { getTotalCartAmount } = useContext(StoreContext);

//   const handleWhatsapp = () => {
//     const phoneNumber = '6370570615'; // Replace with your phone number
//     const message = `Hello, I want to order a custom cake. I have an idea for it.`;
//     const encodedMessage = encodeURIComponent(message);
//     const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

//     window.open(whatsappUrl, '_blank');
//   };

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <div className='navbar'>
//       <Link to='/'><img className='logo' src={assets.logo} alt="Logo" /></Link>
      
//       <ul className={`navbar-menu ${menuOpen? 'active' : ''}`} style={menuOpen? { display: 'flex' } : { display: 'none' }}>
//         <Link to="/" onClick={() => { setMenu("home"); setMenuOpen(false); }} className={`${menu === "home"? "active" : ""}`}>Home</Link>
//         <Link to="/aboutus" onClick={() => { setMenu("aboutus"); setMenuOpen(false); }} className={`${menu === "aboutus"? "active" : ""}`}>About Us</Link>
//         <a href='#footer' onClick={() => { setMenu("contact"); setMenuOpen(false); }} className={`${menu === "contact"? "active" : ""}`}>Contact Us</a>
//         <button className='whatsapp-btn' onClick={handleWhatsapp}>Submit your ideas</button>
//       </ul>
//       <div className="navbar-right">
//         <Link to='/cart' className='navbar-search-icon'>
//           <img src={assets.basket_icon} alt="Cart" />
//           <div className={getTotalCartAmount() > 0? "dot" : ""}></div>
//         </Link>
//         <div className="menu-icon" onClick={toggleMenu}>
//           {menuOpen? <FaTimes /> : <FaBars />}
//         </div>
//         <button className='whatsapp-btn mobile-hide' onClick={handleWhatsapp}>Submit your ideas</button>
//       </div>
//     </div>
//   );
// };
