import React, { useState, useEffect } from 'react';

const LikeDislikeComponent = () => {
  // Initialize state with values from local storage or default to 0
  const [likes, setLikes] = useState(() => {
    const savedLikes = localStorage.getItem('likes');
    return savedLikes !== null ? parseInt(savedLikes, 10) : 0;
  });

  const [dislikes, setDislikes] = useState(() => {
    const savedDislikes = localStorage.getItem('dislikes');
    return savedDislikes !== null ? parseInt(savedDislikes, 10) : 0;
  });

  // Update local storage whenever likes or dislikes changes
  useEffect(() => {
    localStorage.setItem('likes', likes);
  }, [likes]);

  useEffect(() => {
    localStorage.setItem('dislikes', dislikes);
  }, [dislikes]);

  // Handler functions for button clicks
  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleDislike = () => {
    setDislikes(dislikes + 1);
  };

  return (


    <div className='container'>

<div className="like-dislike-container">
      <button onClick={handleLike} className="btn btn-success">
        👍 Like {likes}
      </button>&nbsp;&nbsp;
      <button onClick={handleDislike} className="btn btn-danger">
        👎 Dislike {dislikes}
      </button>
    </div>
    </div>
    
  );
};

export default LikeDislikeComponent;
