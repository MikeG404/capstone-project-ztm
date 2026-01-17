import { Fragment } from "react";
import CategoryPreview from "../../components/category-preview/category-preview.component.jsx";
import { useSelector } from "react-redux";
import { setCategoriesMap } from "../../store/categories/categories.selector";

const CategoriesPreview = () => {
    const categoriesMap = useSelector(setCategoriesMap);
    return (
        <Fragment>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title} title={title} products={products} />
            })}
        </Fragment>
    )
}

export default CategoriesPreview;