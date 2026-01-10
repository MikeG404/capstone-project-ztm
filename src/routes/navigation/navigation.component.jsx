import { NavigationContainer, NavLinks, NavLink, LogoContainer } from './navigation.styles.jsx';
import { Fragment, useContext } from "react";
import { Outlet } from "react-router-dom";

import CrownLogo from "../../assets/crown.svg?react";
import { UserContext } from '../../context/user.context';
import { CartProductContext } from '../../context/cart.context';

import { signOutUser } from '../../../utils/firebase/firebase.utils';
import CartIcon from '../../components/cart-icon/cart-icon.component';
import CartDropdown from '../../components/cart-dropdown/cart-dropdown.component';

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
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