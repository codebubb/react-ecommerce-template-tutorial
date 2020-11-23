import React from 'react';
import StarRating from './StarRating';

const ProductInfo = ({ productInfo }) => {
    return (
        <div className="productInfo">
            <h2>{productInfo.title}</h2>
            <h3>{productInfo.description}</h3>
            <p className="productInfo__price">{productInfo.price}</p>
            <StarRating stars={4}></StarRating>
            <div className="productInfo__colour">
                <span>Colour: {productInfo.colour?.name}</span>
                <span className="sample" style={{ backgroundColor: productInfo.colour.value }}></span>
            </div>
            <div className="productInfo__features">
                <ul>
                    {productInfo.features.map((featureText, index) => (<li key={index}>{featureText}</li>))}
                </ul>
            </div>
            <div className="productInfo__sizes">
                <span>Size</span>
                <select>
                    {productInfo.sizes.map((size, index) => (<option key={index} value={size}>{size}</option>))}
                </select>
            </div>
            <div className="productInfo__addToCart">
                <button>Add to Kart</button>
            </div>

        </div>
    );
};


export default ProductInfo;