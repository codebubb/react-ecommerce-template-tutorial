import React from 'react';
import ProductImage from './ProductImage';
import ProductInfo from './ProductInfo';
import RelatedItems from './RelatedItems';

const Product = ({ productInfo }) => {
    const {
        title,
        description,
        price,
        colour,
        features,
        sizes,
        rating,
    } = productInfo;

    const productInfoData = {
        title,
        description,
        price,
        colour,
        features,
        sizes,
        rating,
    };

    const { mainImage, relatedProducts } = productInfo;

    return (
        <div className="product">
            {productInfo && <div>
                <div className="product__main">
                    <ProductImage imageUrl={mainImage}/>
                    <ProductInfo productInfo={productInfoData}/>
                </div>

                <div className="product__relatedItems">
                    <RelatedItems relatedProducts={relatedProducts}/>
                </div>
            </div>}
        </div>
    );
};

export default Product;