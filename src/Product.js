import React from 'react';
import ProductInfo from './ProductInfo';
import ProductImage from './ProductImage';
import RelatedItems from './RelatedItems';

const Product = ({ product }) => {
    const {
        title,
        description,
        price,
        colour,
        features,
        sizes,
    } = product;
    const productInfo = {
        title,
        description,
        price,
        colour,
        features,
        sizes,
    };
    const { mainImage, relatedProducts } = product;
    return (
        <div className="product">
            {product && <div>
                <div className="product__main">
                    <ProductImage imageUrl={mainImage}></ProductImage>
                    <ProductInfo productInfo={productInfo}></ProductInfo>
                </div>
                <div className="product__relatedItems">
                    <RelatedItems relatedProducts={relatedProducts}></RelatedItems>
                </div>
            </div>
            }
        </div>
    );
};

export default Product;