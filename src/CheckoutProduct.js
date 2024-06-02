import React from 'react';
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";

function CheckoutProduct({ id, title, image, price, rating }) { // Added curly braces for props

  const [{ basket }, dispatch] = useStateValue(); // Destructure dispatch from useStateValue

  const removeFromBasket = () => {
    // remove the item from the basket
    dispatch({
        type: 'REMOVE_FROM_BASKET',
        id: id,
    });
  }

  return (
    <div className='checkoutProduct'>
        <img className='checkoutProduct__image' src={image} alt=''/>
        <div className='checkoutProduct__info'>
            <p className='checkoutProduct__title'>{title}</p>

            <p className='checkoutProduct__price'>
                <small>₹</small>
                <strong>{price}</strong>
            </p>

            <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, index) => ( // Added index parameter to map function
              <p key={index}>🌟</p>
            ))}
        </div>

        <button onClick={removeFromBasket}>Remove from Basket</button> {/* Added button text */}
        </div>
    </div>
  )
}

export default CheckoutProduct;


