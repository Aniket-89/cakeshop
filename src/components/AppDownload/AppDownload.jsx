import React from 'react'
import './AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
    return (
        <div className='app-download' id='app-download'>
            <p>Welcome to Cakepreneur, where every cake is a work of art. We specialize in crafting custom cakes for all occasions. From elegant weddings to joyful birthdays, our team is dedicated to creating delicious masterpieces that make your celebrations unforgettable. Let us bring your sweet dreams to life at Cakepreneur.</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
            </div>
        </div>
    )
}

export default AppDownload
