import React from 'react';
import StarRating from './StarRating';

const ProductSummary = ({ product }) => {
    return (
        <div className="productSummary">
            <div className="productSummary__imageWrapper">
                <img className="productSummary__image" src={product.img}/>
            </div>
                <p className="productSummary__title">{product.title}</p>
                <p className="productSummary__productCode"><a href="#">{product.productCode}</a></p>
                <StarRating stars={product.stars}></StarRating>
                <p className="productSummary__price">{product.price}</p>
        </div>
    );
}

export default ProductSummary;