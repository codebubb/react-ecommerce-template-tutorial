import React from 'react';

const ProductImage = ({ imageUrl }) => (
    <div className="mainImage">
        <img src={imageUrl}/>
    </div>
);

export default ProductImage;