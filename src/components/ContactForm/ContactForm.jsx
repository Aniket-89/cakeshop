import React, { useState } from 'react'
import './ContactForm.css'

const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [emailError, setEmailError] = useState(null);

  const handleSendMessage = () => {
    if (!validateEmail(email)) {
      setEmailError('Invalid email address');
      return;
    }

    const phoneNumber = '6370570615'; // Replace with your phone number
    const encodedMessage = `
        name: ${name}
        email: ${email}
        message: ${message}
      `;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(encodedMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsSending(true);
    setTimeout(() => {
      setIsSending(false);
    }, 2000);
    setName('');
  setEmail('');
  setMessage('');
  setEmailError(null);

}

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  return (
    <div className=''>
      <h6 className="heading"><span className="light-text">Have a cake idea? </span><br /><span className="light-text">Need a sweet centerpiece for your event? </span><br />Drop a message...</h6>
      <form className='contact-form'>
        <div className="form-group">
          <label>Name</label>
          <input type="text" className="form-control" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
          {emailError && <div style={{ color: 'red' }}>{emailError}</div>}
        </div>
        <div className="form-group">
          <label>Message</label>
          <textarea className="form-control" value={message} onChange={(e) => setMessage(e.target.value)} required />
        </div>
        <button type="button" className="btn btn-primary" onClick={handleSendMessage}>
          {isSending ? 'Sending...' : 'Send'} 
        </button>
      </form>
    </div>
  )
}

export default ContactForm