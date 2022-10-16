import React from "react";

const Card = ({ image, title, description }) => {
  const defaultImg = "https://cdn-icons-png.flaticon.com/512/21/21104.png";
  return (
    <div className="card">
      <img src={image ? image : defaultImg} alt="Card picture" />
      {/* <h2>{title ? title : "User"}</h2>
      {description && <p>{description}</p>} */}
    </div>
  );
};

export default Card;
