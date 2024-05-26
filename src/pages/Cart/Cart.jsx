import React, { useContext } from 'react';
import './Cart.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    const phoneNumber = '6370570615'; // Replace with your phone number
    const message = `Order Details:\n${food_list
      .filter(item => cartItems[item.food_id] > 0)
      .map(item => `${item.food_name} - ${cartItems[item.food_id]} x &#x20B9;${item.food_price} = &#x20B9;${item.food_price * cartItems[item.food_id]}`)
      .join('\n')}\n\nTotal: &#x20B9;${getTotalCartAmount()}\n\nDelivery Fee: &#x20B9;${getTotalCartAmount() === 0 ? 0 : 5}\n\nGrand Total: &#x20B9;${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.location.href = whatsappUrl;
  };

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p> <p>Title</p> <p>Price</p> <p>Quantity</p> <p>Total</p> <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item.food_id] > 0) {
            return (
              <div key={index}>
                <div className="cart-items-title cart-items-item">
                  <img src={item.food_image} alt="" />
                  <p>{item.food_name}</p>
                  <p>&#x20B9;{item.food_price}</p>
                  <div>{cartItems[item.food_id]}</div>
                  <p>&#x20B9;{item.food_price * cartItems[item.food_id]}</p>
                  <p className='cart-items-remove-icon' onClick={() => removeFromCart(item.food_id)}>x</p>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details"><p>Subtotal</p><p>&#x20B9;{getTotalCartAmount()}</p></div>
            <hr />
            <div className="cart-total-details"><p>Delivery Fee</p><p>&#x20B9;{getTotalCartAmount() === 0 ? 0 : 5}</p></div>
            <hr />
            <div className="cart-total-details"><b>Total</b><b>&#x20B9;{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 5}</b></div>
          </div>
          <button onClick={handleCheckout}>PROCEED TO CHECKOUT</button>
        </div>
        
      </div>
    </div>
  );
}

export default Cart;
