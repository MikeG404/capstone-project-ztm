import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx';
import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";
import { useSelector } from 'react-redux';

import CrownLogo from "../../assets/crown.svg?react";
import { CartProductContext } from '../../context/cart.context';
import { selectCurrentUser } from '../../store/user/user.selector';

import { signOutUser } from '../../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { isCartOpen } = useContext(CartProductContext);


  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to='/'>
          <CrownLogo className="logo" />
        </LogoContainer>
        <NavLinks>
          <NavLink to='/shop'>
            SHOP
          </NavLink>
          {
            currentUser ?
              <NavLink onClick={signOutUser}>
                SIGN OUT
              </NavLink>
              :
              <NavLink to='/auth'>
                SIGN IN
              </NavLink>
          }
          <CartIcon />
        </NavLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  )
}

export default Navigation;