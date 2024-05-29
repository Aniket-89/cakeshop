import React, { useContext, useState, useEffect } from 'react';
import './Navbar.css';
import { assets } from '../../assets/assets';
import { Link, useLocation } from 'react-router-dom';
import { StoreContext } from '../../Context/StoreContext';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const { getTotalCartAmount } = useContext(StoreContext);
  const location = useLocation();

  useEffect(() => {
    // Close the menu when the location changes
    setMenuOpen(false);
  }, [location]);

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

  const isActive = (path) => location.pathname === path;

  return (
    <div className='navbar'>
      <Link to='/'><img className='logo' src={assets.logo} alt="" /></Link>
      <ul className="navbar-menu">
        <Link to="/" className={isActive("/") ? "active" : ""}>Home</Link>
        <Link to="/aboutus" className={isActive("/aboutus") ? "active" : ""}>About Us</Link>
        <Link to="/contactus" className={isActive("/contactus") ? "active" : ""}>Contact Us</Link>
      </ul>
      <ul className={`navbar-menu-m ${menuOpen ? 'active' : ''}`} style={menuOpen ? { display: 'flex' } : { display: 'none' }}>
        <Link to="/" onClick={() => setMenuOpen(false)} className={isActive("/") ? "active" : ""}>Home</Link>
        <Link to="/aboutus" onClick={() => setMenuOpen(false)} className={isActive("/aboutus") ? "active" : ""}>About Us</Link>
        <Link to="/contactus" onClick={() => setMenuOpen(false)} className={isActive("/contactus") ? "active" : ""}>Contact Us</Link>
        <button className='whatsapp-btn' onClick={handleWhatsapp}>Submit your ideas</button>
      </ul>
      <div className="navbar-right">
        <Link to='/cart' className='navbar-search-icon'>
          <img src={assets.trolley} alt="" />
          <div className={getTotalCartAmount() > 0 ? "dot" : ""}></div>
        </Link>
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
        <button className='whatsapp-btn mobile-hide' onClick={handleWhatsapp}>Submit your ideas</button>
      </div>
    </div>
  );
}

export default Navbar;
