import React, { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

const StarRating = ({ noOfStars = 5 }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setRating(getCurrentIndex);
  };
  const handleME = (getCurrentIndex) => {
    console.log(getCurrentIndex);
    setHover(getCurrentIndex);
  };
  const handleML = () => {
    setHover(rating);
  };

  return (
    <div className="star-rating">
      {[...Array(noOfStars)].map((_, index) => {
        index += 1;
        return (
          <FaStar
            key={index}
            className={index <= (hover || rating) ? "active" : "inactive"}
            onClick={() => handleClick(index)}
            onMouseMove={() => handleME(index)}
            onMouseLeave={() => handleML()}
            size={40}
          />
        );
      })}
      ;
    </div>
  );
};

export default StarRating;
