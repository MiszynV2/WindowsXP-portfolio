import React, { useState, useEffect } from "react";
import classes from "./Bears.module.css";
import Game from "./Game";

function TitleBar({ handleFolderSelection }) {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startY, setStartY] = useState(0);
  const [offsetX, setOffsetX] = useState(0);
  const [offsetY, setOffsetY] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [windowHeight, setWindowHeight] = useState(window.innerHeight);
  const [bears, setBears] = useState([]);

  const handleCloseClick = (e) => {
    handleFolderSelection(0);
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX - offsetX);
    setStartY(e.clientY - offsetY);
    e.preventDefault();
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const newOffsetX = e.clientX - startX;
      const newOffsetY = e.clientY - startY;
      setOffsetX(newOffsetX);
      setOffsetY(newOffsetY);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
    setWindowHeight(window.innerHeight);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    const Wrapper = document.getElementById("chat-gpt-wrapper");
    if (Wrapper) {
      const { top, left, right, bottom } = Wrapper.getBoundingClientRect();
      if (left < 0) {
        setOffsetX(offsetX - left);
      } else if (right > windowWidth) {
        setOffsetX(offsetX - (right - windowWidth));
      }
      if (top < 0) {
        setOffsetY(offsetY - top);
      } else if (bottom > windowHeight) {
        setOffsetY(offsetY - (bottom - windowHeight));
      }
    }
  }, [offsetX, offsetY, windowWidth, windowHeight]);

  return (
    <div
      className={classes.Wrapper}
      style={{ transform: `translate(${offsetX}px, ${offsetY}px)` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    ></div>
  );
}

export default TitleBar;