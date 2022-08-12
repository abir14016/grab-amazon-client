import React from 'react';

const SingleMembership = (singleMembership) => {
    const { image, level, commission } = singleMembership;
    return (
        <div>
            <h2>{commission}</h2>
            <img src={image} alt="" />
        </div>
    );
};

export default SingleMembership;