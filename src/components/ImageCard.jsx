import React from "react";
import "./appStyles.css";
import { FaRegThumbsUp } from "react-icons/fa";

const ImageCard = ({ image, openPopUp }) => {
  return (
    <div onClick={() => openPopUp(image)} className="image-card">
      <div key={image.id} className="image-wrapper">
        <img src={image.urls.regular} alt={image.user.name} />
      </div>
      <div className="image-info">
        <img src={image.user.profile_image.small} />
        <div className="user-details">
          <h2>{image.user.name}</h2>
          <h3>{`@${image.user.username}`}</h3>
        </div>
        <div className="image-likes">
          <FaRegThumbsUp size="16px" color="#eeeeee" />
          <h3>{image.likes}</h3>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;
