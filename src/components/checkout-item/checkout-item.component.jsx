import './checkout-item.styles.scss'

import { useContext } from 'react';
import { CartProductContext } from '../../context/cart.context';

const CheckoutItem = ({ cartItem }) => {
    const { addItemTocart, removeItemToCart, hardRemoveItemToCart } = useContext(CartProductContext);
    const { name, imageUrl, price, quantity } = cartItem;

    return (
        <div className='checkout-item-container'>
            <div className='image-conttainer'>
                <img src={imageUrl} alt={`${name}`} />
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className='arrow' onClick={() => removeItemToCart(cartItem)}>
                    &#10094;
                </div>
                {quantity}
                <div className='arrow' onClick={() => addItemTocart(cartItem)}>
                    &#10095;
                </div>
            </span>
            <span className='price'>{price}</span>
            <div className='remove-button' onClick={() => hardRemoveItemToCart(cartItem)}>&#10005;</div>
        </div>
    )
}

export default CheckoutItem;