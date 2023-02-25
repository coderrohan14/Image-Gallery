import React from "react";
import "./appStyles.css";
import { FaRegThumbsUp } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { AiOutlineCloudDownload } from "react-icons/ai";

const ImagePopUp = ({ image, onClose }) => {
  return (
    <div className="image-pop-up-card">
      <AiOutlineCloseCircle
        onClick={() => onClose()}
        color="white"
        size="40px"
        cursor="pointer"
        fontWeight="bold"
        style={{ position: "absolute", top: 30, right: 30 }}
      />
      <img src={image.urls.full} alt={image.user.name} />
      <a
        href={image.links.download}
        className="download-button"
        target="_blank"
      >
        Download
        <AiOutlineCloudDownload color="#eeeeee" />
      </a>
      <div className="pop-up-bottom">
        <div className="image-info">
          <img
            className="pop-up-profile-image"
            src={image.user.profile_image.large}
          />
          <div className="pop-up-user-details">
            <h2>{image.user.name}</h2>
            <h3>{`@${image.user.username}`}</h3>
          </div>
          <div className="pop-up-image-likes">
            <FaRegThumbsUp size="16px" color="#eeeeee" />
            <h3>{image.likes}</h3>
          </div>
        </div>
        <p>{image.description ? image.description : image.alt_description}</p>
      </div>
    </div>
  );
};

export default ImagePopUp;
