import React, { useRef, useEffect } from "react";
// import AppContext from "../AppContext";

const Banner = ({ setBannerElements }) => {
  // const [, setDimensions] = useContext(AppContext);
  const websites = useRef();
  const apps = useRef();
  const branding = useRef();

  useEffect(() => {
    let elements = {
      websites: websites,
      apps: apps,
      branding: branding
    };
    setBannerElements(elements);
  }, []);

  return (
    <div className="banner-container">
      <div className="banner-inner">
        <div className="banner-title">
          <h2>We make it happen</h2>
        </div>
        <div className="banner-items-container">
          <div className="banner-item">
            <h1 ref={websites}>Websites</h1>
          </div>
          <div className="banner-item">
            <h1 ref={apps}>Apps</h1>
          </div>
          <div className="banner-item">
            <h1 ref={branding}>Branding</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
