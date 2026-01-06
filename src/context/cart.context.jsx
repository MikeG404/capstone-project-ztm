import { useState, createContext } from "react";

const addCartItem = (cardItems, productToAdd) => {
    const existingCardItem = cardItems.find((cartItem) => cartItem.id === productToAdd.id);

    if (existingCardItem) {
        return cardItems.map((cartItem) => cartItem.id === productToAdd.id 
            ? { ...cartItem, quantity: cartItem.quantity + 1}
            : cartItem
        )
    }

    return [...cardItems, { ...productToAdd, quantity: 1}];
}

export const CartProductContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemTocart: () => {}
});


export const CartProductProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemTocart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { isCartOpen, setIsCartOpen, addItemTocart, cartItems };


    return (
        <CartProductContext.Provider value={value}>
            {children}
        </CartProductContext.Provider>
    )
}