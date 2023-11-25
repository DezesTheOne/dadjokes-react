import { useState } from 'react';

export const LikesCounter = () => {
  const [upLikes, setUpLikes] = useState(0);
  const [downLikes, setDownLikes] = useState(0);

  const handleUpClick = () => {
    setUpLikes(upLikes + 1);
  };

  const handleDownClick = () => {
    setDownLikes(downLikes + 1);
  };

  return (
    <div>
      <button
        id="btn-up"
        className="btn-like btn-like--up"
        onClick={handleUpClick}
      ></button>
      <span id="likes-up" className="likes-count likes-count--up">{upLikes}</span>

      <button
        id="btn-down"
        className="btn-like btn-like--down"
        onClick={handleDownClick}
      ></button>

      <span id="likes-down" className="likes-count likes-count--down">{downLikes}</span>
    </div>
  );
};
