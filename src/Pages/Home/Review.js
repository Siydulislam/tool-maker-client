import React from 'react';

const Review = ({ review }) => {
    const { name, description, img, rating } = review;
    return (
        <div class="card w-96 bg-base-100 shadow-xl mx-auto">
            <figure class="px-10 pt-10">
                <img src={img} alt="Shoes" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title">{name}</h2>
                <p>{description}</p>
                <p>Rating: {rating}/5</p>
            </div>
        </div>
    );
};

export default Review;