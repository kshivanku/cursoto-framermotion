import React, { useState, useEffect } from "react";
//HOOKS
import useMousePosition from "./hooks/useMousePosition";
//COMPONENTS
import Header from "./components/header";
import Banner from "./components/banner";
import Main from "./components/main";
import Cursor from "./components/cursor";
//FUNCTION
import getCursorProps from "./getCursorProps";
//STYLE
import "./styles.scss";

export default function App() {
  const [bannerElements, setBannerElements] = useState({});
  const mousePosition = useMousePosition();
  const [cursorProps, setCursorProps] = useState({
    videoID: null,
    scale: 1
  });

  useEffect(() => {
    setCursorProps(getCursorProps(bannerElements, mousePosition));
  }, [bannerElements, mousePosition]);

  return (
    <div>
      <Header />
      <Banner setBannerElements={setBannerElements} />
      <Cursor cursorProps={cursorProps} />
      <Main />
    </div>
  );
}
