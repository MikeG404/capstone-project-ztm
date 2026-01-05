import { useState, createContext } from "react";
import PRODUCTS from "../shop-data.json";

export const ProductContext = createContext({
    currentProducts: [],
});


export const ProductProvider = ({children}) => {
    const [currentProducts, setCurrentProducts] = useState(PRODUCTS)
    const value = { currentProducts };

    return (
        <ProductContext.Provider value={value}>
            {children}
        </ProductContext.Provider>
    )
}