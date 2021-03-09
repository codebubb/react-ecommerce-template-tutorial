import React from 'react';

const ProductImage = ({ imageUrl }) => {
    return (
        <div className="mainImage">
            <img src={imageUrl} />
        </div>
    );
};

export default ProductImage;