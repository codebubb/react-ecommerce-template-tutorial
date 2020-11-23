import React from 'react';
import filled from './star_filled.png';
import empty from './star_empty.png';

const StarRating = ({ stars }) => {
    const starArray = [];
    for (let i=0; i<5; i++) {
        starArray.push(stars > i);
    }

    return (
        <div className="starRating">
            {starArray.map((show, index) => <img key={index} src={ show ? filled : empty }/>)}
        </div>
    )
};


export default StarRating;