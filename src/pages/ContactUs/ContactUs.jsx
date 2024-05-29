import React from 'react'
import "./ContactUs.css";
import { useNavigate } from "react-router-dom";
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Address from '../../components/Address/Address'
import ContactForm from '../../components/ContactForm/ContactForm'
import { assets } from "../../assets/assets";

const ContactUs = () => {
  return (
    <>
    <div className="contact">
        <div className="container"> 
            <Address />
            <ContactForm />
        </div>
    </div>
    </>
  )
}

export default ContactUs
