import React from 'react';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem: { name, imageUrl, price, quantity } }) => {
  return (
    <div className='checkout-item'>
      <div className='image-container'>
        <img src={imageUrl} alt='item' />
      </div>

      <spna className='name'>{name}</spna>
      <spna className='quantity'>{quantity}</spna>
      <spna className='price'>{price}</spna>
      <spna className='remove-button'>&#10005;</spna>
    </div>
  );
};

export default CheckoutItem;
