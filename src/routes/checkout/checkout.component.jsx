import { CheckoutContainer, CheckoutHeader, HeaderBlock, Total } from "./checkout.styles";

import { CartProductContext } from "../../context/cart.context";
import { useContext } from "react";
import CheckoutItem from '../../components/checkout-item/checkout-item.component';

const Checkout = () => {
    const { cartItems, cartTotal } = useContext(CartProductContext);

    return (
        <CheckoutContainer>
            <CheckoutHeader>
                <HeaderBlock>
                    <span>Product</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Quantity</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Description</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Price</span>
                </HeaderBlock>
                <HeaderBlock>
                    <span>Remove</span>
                </HeaderBlock>
            </CheckoutHeader>
            {cartItems.map((cartItem) => {
                return (<CheckoutItem key={cartItem.id} cartItem={cartItem} />)
            })}
            <Total>Total: ${cartTotal}</Total>
        </CheckoutContainer>
    )
}

export default Checkout;