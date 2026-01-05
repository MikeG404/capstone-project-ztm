import "./shop.styles.scss";
import { useContext } from "react";
import { ProductContext } from "../../context/product.context";
import ProductCard from "../../components/product-card/product-card.component";

const Shop = () => {
    const { currentProducts } = useContext(ProductContext); 

    return (
        <div className="products-container">
            {currentProducts && currentProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </div>
    )
}

export default Shop;