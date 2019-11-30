import React from 'react';
import { connect } from 'react-redux';
import { auth } from '../../firebase/firebase.utils';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import CartIcon from '../cart-icon/cart-icon';
import CartDropDown from '../cart-dropdown/cart-dropdown';
import { createStructuredSelector } from 'reselect';
import { selectCartHidden } from '../../redux/cart/cart-selector';
import { selectCurrentUser } from '../../redux/user/user-selector';
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink
} from './header-style';

const Header = ({ currentUser, hidden }) => {
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
        <Logo className='logo' />
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to='/shop'>SHOP</OptionLink>
        <OptionLink to='/contact'>CONTACT</OptionLink>

        {currentUser ? (
          <OptionLink as ='div' onClick={() => auth.signOut()}>SIGNOUT</OptionLink>
        ) : (
          <OptionLink className='option' to='/signin'>
            SIGN IN
          </OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropDown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});
export default connect(mapStateToProps)(Header);
