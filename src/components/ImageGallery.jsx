import React, { useState } from "react";
import "./appStyles.css";
import ImageCard from "./ImageCard";
import ImagePopUp from "./ImagePopUp";

const ImageGallery = ({ itemData, openPopUp }) => {
  return (
    <div className="image-grid">
      {itemData.map((image) => (
        <ImageCard
          key={image.id}
          image={image}
          openPopUp={(image) => openPopUp(image)}
        />
      ))}
    </div>
  );
};

export default ImageGallery;
