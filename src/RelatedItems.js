import React from 'react';
import RelatedItem from './RelatedItem';

const RelatedItems = ({ relatedProducts }) => {
    return (
        <div>
            <h2>Customers Who Bought This Item Also Bought...</h2>
            <div className="relatedProducts">
                {relatedProducts.map(product => (<RelatedItem key={product.productCode} product={product}/>))}
            </div>
        </div>
    )
};

export default RelatedItems;