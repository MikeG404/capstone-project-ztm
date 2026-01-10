import ShoppingBag from "../../assets/shopping-bag.svg?react";

import { CartIconContainer, ItemCount } from "./cart-icon.styles";
import { CartProductContext } from "../../context/cart.context";
import { useContext } from "react";

const CartIcon = () => {
    const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartProductContext);

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (
        <CartIconContainer onClick={toggleIsCartOpen}>
            <ShoppingBag />
            <ItemCount>{cartCount}</ItemCount>
        </CartIconContainer>
    )
}

export default CartIcon;