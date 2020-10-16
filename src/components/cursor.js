import React, { useEffect } from "react";
import useMousePosition from "../hooks/useMousePosition";
import { motion, useSpring } from "framer-motion";

const Cursor = ({ cursorProps = { videoID: null, scale: 1 } }) => {
  const mousePosition = useMousePosition();
  const transition = {
    type: "spring",
    damping: 40,
    stiffness: 400
  };
  const xPos = useSpring(mousePosition.x, { damping: 100, stiffness: 600 });
  const yPos = useSpring(mousePosition.y, { damping: 100, stiffness: 300 });
  useEffect(() => {
    xPos.set(mousePosition.x - 8);
    yPos.set(mousePosition.y - 8);
  }, [mousePosition]);
  return (
    <motion.div
      className="cursor"
      initial={{
        scale: 1,
        x: -2,
        y: -2
      }}
      x={xPos}
      y={yPos}
      animate={{
        scale: cursorProps && cursorProps.scale
      }}
      transition={transition}
    >
      <div className="video-wrapper ">
        {cursorProps.videoID === "websites" && (
          <video autoPlay loop muted preload="auto" src="videos/websites.mp4">
            Sorry, your browser doesn't support embedded videos.
          </video>
        )}
        {cursorProps.videoID === "apps" && (
          <video autoPlay loop muted preload="auto" src="videos/apps.mp4">
            Sorry, your browser doesn't support embedded videos.
          </video>
        )}
        {cursorProps.videoID === "branding" && (
          <video autoPlay loop muted preload="auto" src="videos/branding.mp4">
            Sorry, your browser doesn't support embedded videos.
          </video>
        )}
      </div>
    </motion.div>
  );
};

export default Cursor;
