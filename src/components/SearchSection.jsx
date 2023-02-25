import React, { useState } from "react";
import "./appStyles.css";

const SearchSection = ({ onSearchValueChange }) => {
  const [input, setInput] = useState("");
  return (
    <div>
      <form className="search-section">
        <h1>Download High Quality Images by creators</h1>
        <h3>Over 2.4 million+ stock Images by our talented community</h3>
        <input
          className="search-bar"
          type="text"
          placeholder="Search high resolution Images, categories, wallpapers"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            onSearchValueChange(e.target.value);
          }}
        />
      </form>
    </div>
  );
};

export default SearchSection;
