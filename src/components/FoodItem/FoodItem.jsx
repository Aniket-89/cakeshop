import React, { useContext, useState } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext';

const FoodItem = ({ image, name, price, desc , id }) => {

    const [itemCount, setItemCount] = useState(0);
    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
      <div className='food-item-img-container'>
        <img className='food-item-image' src={image} alt="" />
        {!cartItems[id]
         ? <img className='add' onClick={() => addToCart(id)} src={assets.add_icon_white} alt="" />
          : <div className="food-item-counter">
              <img src={assets.remove_icon_red} onClick={() => removeFromCart(id)} alt="" />
              <p>{cartItems[id]}</p>
              <img src={assets.add_icon_green} onClick={() => addToCart(id)} alt="" />
            </div>
        }
      </div>
      <div className="food-item-info">
        <div className="food-item-name-rating">
          <p>{name}</p> <img src={assets.rating_starts} alt="" />
        </div>
        <p className="food-item-desc">{desc}</p>
        <div className="price-and-weight">

        <p className="food-item-price">&#x20B9;{priceValue.toFixed(2)}</p>
        <div className="food-item-weight-container">
          <img
            src={assets.remove_icon_red}
            onClick={() => handleWeightChange('decrement')}
            alt=""
            className={weightValue === 1? 'monochrome' : ''} // add monochrome class if weight is 1 kg
            />
          <span className="food-item-weight">{weightValue} kg</span>
          <img src={assets.add_icon_green} onClick={() => handleWeightChange('increment')} alt="" />
        </div>
            </div>
        </div>
    )
}

export default FoodItem
