import React, { useEffect, useState } from "react";
import { useLazyGetSearchResultsQuery } from "../app/api/unsplashApiSlice";
import AppBar from "./AppBar";
import "./appStyles.css";
import ImageGallery from "./ImageGallery";
import SearchSection from "./SearchSection";
import ImagePopUp from "./ImagePopUp";
import CircularProgress from "@mui/material/CircularProgress";

function App() {
  const [trigger, result] = useLazyGetSearchResultsQuery();
  const [popUpState, setPopUpState] = useState(false);
  const [popUpImage, setPopUpImage] = useState(null);
  useEffect(() => {
    trigger("photos");
  }, []);
  function onSearchChange(searchInput) {
    if (searchInput === "") {
      trigger("photos");
    } else {
      trigger(searchInput);
    }
  }
  function openPopUp(image) {
    setPopUpState(true);
    setPopUpImage(image);
  }
  return (
    <div>
      {popUpState && (
        <ImagePopUp image={popUpImage} onClose={() => setPopUpState(false)} />
      )}
      <div className={`${popUpState ? "disabled" : null}`}>
        <AppBar />
        <SearchSection
          imgUrl={"https://unsplash.com/photos/z0gDv24X3uQ"}
          onSearchValueChange={onSearchChange}
        />
        {result.isSuccess && (
          <ImageGallery itemData={result.data.results} openPopUp={openPopUp} />
        )}
        {result.isLoading && (
          <div className="progress-bar">
            <CircularProgress />
          </div>
        )}
        {result.isError && (
          <div className="error-msg">No results found, please try again.</div>
        )}
      </div>
      <footer>Copyright © 2023 Rohan Pradhan</footer>
    </div>
  );
}

export default App;
