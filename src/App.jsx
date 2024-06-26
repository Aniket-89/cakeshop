import React, { useState } from 'react'
import Home from './pages/Home/Home'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Cart from './pages/Cart/Cart'
import LoginPopup from './components/LoginPopup/LoginPopup'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import MyOrders from './pages/MyOrders/MyOrders'
import AboutUs from './pages/AboutUs/AboutUs'
import ContactUs from './pages/ContactUs/ContactUs'


const App = () => {
//   const [showLogin,setShowLogin] = useState(false);

  return (
    <>
    {/* {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>} */}
      <div className='app'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/order' element={<PlaceOrder/>}/>
          <Route path='/contactus' element={<ContactUs/>}/>
          <Route path='/aboutus' element={<AboutUs/>}/>
        </Routes>
      </div>
      <Footer />
    </>
  )
}

export default App
