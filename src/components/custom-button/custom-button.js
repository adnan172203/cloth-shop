import React from 'react';

import './custom-button.scss';

const CustomButton = props => (
  <button className={`${props.inverted ? 'inverted': ''} custom-button`} {...props}>
    {props.children}
  </button>
);

export default CustomButton;

