import { ProductCardContainer, Image, Footer } from "./product-card.styles.jsx"

import Button from "../button/button.component";
import { useContext } from "react";
import { CartProductContext } from "../../context/cart.context";

import { BUTTON_TYPE_CLASSES } from "../button/button.component";

const ProductCard = ({ product }) => {
    const { addItemTocart } = useContext(CartProductContext);

    const { name, price, imageUrl } = product;

    const addProductToCart = () => addItemTocart(product);

    return (
        <ProductCardContainer>
            <Image src={imageUrl} alt={`${name}`} />
            <Footer>
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </Footer>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
        </ProductCardContainer>
    )
}

export default ProductCard;