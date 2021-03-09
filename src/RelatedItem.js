import React from 'react';
import StarRating from './StarRating';

const RelatedItem = ({ product }) => {
    return (
        <div className="productSummary">
            <div className="productSummary__imageWrapper">
                <img className="productSummary__image" src={product.img}/>
            </div>
            <p className="productSummary__title">{product.title}</p>
            <p className="productSummary__productCode">{product.productCode}</p>
            <StarRating stars={product.stars}/>
            <p className="productSummary__price">{product.price}</p>
        </div>
    );
};

export default RelatedItem;