import { useState, createContext, useEffect } from "react";

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
    addItemTocart: () => {},
    cartCount: 0
});


export const CartProductProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    const addItemTocart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = { isCartOpen, setIsCartOpen, addItemTocart, cartItems, cartCount };


    return (
        <CartProductContext.Provider value={value}>
            {children}
        </CartProductContext.Provider>
    )
}