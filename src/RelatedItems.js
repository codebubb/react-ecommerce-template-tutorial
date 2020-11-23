import React from 'react';
import ProductSummary from './ProductSummary';

const RelatedItems = ({ relatedProducts }) => {

    return (
        <div>
            <h2>Customers Who Bought This Item Also Bought</h2>
            <div className="relatedProducts">
                {relatedProducts.map(product => (<ProductSummary key={product.productCode} product={product}></ProductSummary>))}
            </div>
        </div>
    );
};

export default RelatedItems;