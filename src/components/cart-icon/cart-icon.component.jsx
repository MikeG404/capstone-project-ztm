import "./cart-icon.styles.scss";

import ShoppingBag from "../../assets/shopping-bag.svg?react";
import { CartProductContext } from "../../context/cart.context";
import { useContext } from "react";

const CartIcon = ({handleToggle}) => {
    const { isCartOpen, setIsCartOpen, cartCount} = useContext(CartProductContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <div className="cart-icon-container" onClick={toggleIsCartOpen}>
            <ShoppingBag className="shopping-icon"/>
            <span className="item-count">{cartCount}</span>
        </div>
    )
}

export default CartIcon;