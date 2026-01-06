import "./cart-dropdown.styles.scss";

import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { useContext } from "react";
import { CartProductContext } from "../../context/cart.context";

const CartDropdown = () => {
    const { cartItems } = useContext(CartProductContext);

    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
                {cartItems.map(cartItem => (
                    <CartItem key={cartItem.id} cartItem={cartItem}/>
                ))}
                <Button>Go to checkout</Button>
            </div>
        </div>
    )
}

export default CartDropdown;