import { CartDropdownContainer, CartItems, EmptyMessage } from "./cart-dropdown.styles.jsx";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartProductContext } from "../../context/cart.context";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
    const { cartItems } = useContext(CartProductContext);
    const navigate = useNavigate();

    const goToCheckoutHandler = () => {
        navigate('/checkout');
    }

    return (
        <CartDropdownContainer>
            <CartItems>
                {
                    cartItems.length ? cartItems.map(cartItem => (
                        <CartItem key={cartItem.id} cartItem={cartItem} />
                    )) : <EmptyMessage>Your cart is empty</EmptyMessage>
                }
                <Button onClick={goToCheckoutHandler}>Go to checkout</Button>
            </CartItems>
        </CartDropdownContainer>
    )
}

export default CartDropdown;