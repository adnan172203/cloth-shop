import React, { Component } from 'react';
import FormInput from '../from-input/form-input';
import CustomButton from '../../components/custom-button/custom-button';
import './sign-in.scss';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  };

  handleSubmit = e => {
    e.preventDefault();

    this.setState({email:'',password:''});
  }

  handleChange = e => {
      const { value, name } = e.target;

      this.setState({ [name]:value });
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have an account</h2>
        <span>sign in with your email</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput 
            name='email' 
            type='email' 
            value={this.state.email}
            handleChange={this.handleChange}
            label ='email'
            required
           />
        
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          
          <CustomButton type='submit'> Sign In </CustomButton>
        </form>
      </div>
    );
  }
}

export default SignIn;
