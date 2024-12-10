// src/components/RatingComponent.js
import React, { useState, useEffect } from 'react';
import StarRatings from 'react-star-ratings';

const RatingComponent = () => {
  // Initialize state from local storage or default to 0
  const [rating, setRating] = useState(() => {
    const savedRating = localStorage.getItem('rating');
    return savedRating ? JSON.parse(savedRating) : 0;
  });

  // Update local storage whenever the rating changes
  useEffect(() => {
    localStorage.setItem('rating', JSON.stringify(rating));
  }, [rating]);

  const changeRating = (newRating) => {
    setRating(newRating);
  };

  return (
    <div>
      <h2>Rate this item</h2>
      <StarRatings
        rating={rating}
        starRatedColor="blue"
        changeRating={changeRating}
        numberOfStars={5}
        name='rating'
      />
      <p>Current rating: {rating}</p>
    </div>
  );
};

export default RatingComponent;
