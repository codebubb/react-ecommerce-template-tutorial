import React from 'react';
import filledStar from './star_filled.png';
import emptyStar from './star_empty.png';

const StarRating = ({ stars }) => {
    const starArray = [];
    for (let i=0; i<5; i++) {
        starArray.push(stars > i);
    }

    return (
        <div className="starRating">
            {starArray.map((star, index) => (<img key={index} src={star ? filledStar : emptyStar }/>))}
        </div>
    );
};

export default StarRating;