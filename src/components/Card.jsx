import React from "react";

const Card = ({ cardItem }) => {
  return (
    <div className="gridItem">
      <div className="cardImage">
        <img src={cardItem.img} alt="" />
      </div>
      <div className="card_flex">
        <div className="card_head">{cardItem.heading}</div>
        <div className="card_text">{cardItem.text}</div>
      </div>
    </div>
  );
};

export default Card;
