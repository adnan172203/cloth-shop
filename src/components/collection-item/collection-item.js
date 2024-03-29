import React from 'react';
import CustomButton from '../custom-button/custom-button';
import { connect } from 'react-redux';
import { addItem } from '../../redux/cart/cart-action';
import './collection-item.scss';

const CollectionItem = ({ item, addItem }) => {
  const { imageUrl, name, price } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={()=> addItem(item)} inverted='true'>Add to cart</CustomButton>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    addItem: item => dispatch(addItem(item))
  };
};
export default connect(
  null,
  mapDispatchToProps
)(CollectionItem);
