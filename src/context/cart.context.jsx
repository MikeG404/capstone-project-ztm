import { useState, createContext } from "react";

export const CartProductContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {}
});


export const CartProductProvider = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false);
    const value = { isCartOpen, setIsCartOpen };

    return (
        <CartProductContext.Provider value={value}>
            {children}
        </CartProductContext.Provider>
    )
}