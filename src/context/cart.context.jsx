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

const removeCartItem = (cardItems, productToRemove) => {
    const existingCardItem = cardItems.find((cartItem) => cartItem.id === productToRemove.id);

    // We entering here only when the existing item in cart we decrese is equal to one 
    if (existingCardItem.quantity === 1) {
        // Then if we click on it we take all the cards item execpt the one we will remove
         return cardItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }

    return cardItems.map((cartItem) => cartItem.id === productToRemove.id 
        ? { ...cartItem, quantity: cartItem.quantity - 1}
        : cartItem
    )
}

const hardRemoveCartItem = (cardItems, productToRemove) => {
    const existingCardItem = cardItems.find((cartItem) => cartItem.id === productToRemove.id);

    if (existingCardItem) {
         return cardItems.filter((cartItem) => cartItem.id !== productToRemove.id);
    }
}

export const CartProductContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {},
    cartItems: [],
    addItemTocart: () => {},
    removeItemToCart: () => {},
    hardRemoveItemToCart: () => {},
    cartCount: 0,
    cartTotal: 0,
});


export const CartProductProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    const [cartTotal, setCartTotal] = useState(0);

    useEffect(() => {
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartCount(newCartCount);
    }, [cartItems])

    useEffect(() => {
        const newCartTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0);
        setCartTotal(newCartTotal);
    }, [cartItems])

      useEffect(() => {
    const newCartTotal = cartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

    const addItemTocart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const removeItemToCart = (productToremove) => {
        setCartItems(removeCartItem(cartItems, productToremove));
    }

    const hardRemoveItemToCart = (productToRemove) => {
        setCartItems(hardRemoveCartItem(cartItems, productToRemove))
    }


    const value = { 
        isCartOpen, 
        setIsCartOpen, 
        addItemTocart, 
        removeItemToCart,
        hardRemoveItemToCart, 
        cartItems, 
        cartCount,
        cartTotal,
    };


    return (
        <CartProductContext.Provider value={value}>
            {children}
        </CartProductContext.Provider>
    )
}