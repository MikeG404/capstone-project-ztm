import { CheckoutItemContainer, ImageContainer, Name, Quantity, Price, Arrow, Value, RemoveButton } from './checkout-item.styles';

import { useContext } from 'react';
import { CartProductContext } from '../../context/cart.context';

const CheckoutItem = ({ cartItem }) => {
    const { addItemTocart, removeItemToCart, hardRemoveItemToCart } = useContext(CartProductContext);
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <CheckoutItemContainer>
            <ImageContainer>
                <img src={imageUrl} alt={`${name}`} />
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={() => removeItemToCart(cartItem)}>
                    &#10094;
                </Arrow>
                <Value>{quantity}</Value>
                <Arrow onClick={() => addItemTocart(cartItem)}>
                    &#10095;
                </Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={() => hardRemoveItemToCart(cartItem)}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}

export default CheckoutItem;