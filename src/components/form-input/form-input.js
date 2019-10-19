import React from 'react';
import './form-input.scss';

const FormInput = props => {

  return (
    <div className='group'>
      <input
        className='form-input'
        onChange={props.handleChange}
        label={props.label}
        type={props.type}
        name={props.name}
        value={props.value}
      />
      {props.label ? (
        <label
          className={`${props.value.length ? 'shrink' : ''} form-input-label`}
        >
          {props.label}
        </label>
      ) : null}
    </div>
  );
};

export default FormInput;