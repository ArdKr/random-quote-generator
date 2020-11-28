import React from "react";

const Card = ({ quoteText }) => {
  return (
    <div className="card">
      <p>“{quoteText}”</p>
    </div>
  );
};

export default Card;
