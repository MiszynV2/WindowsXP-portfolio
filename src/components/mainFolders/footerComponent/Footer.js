import React, { useState, useEffect } from "react";
import classes from "./Footer.module.css";
import windowsLogo from "../../../sources/windowsLogo.png";
import UserMenu from "./UserMenu";
function Footer({ bears }) {
  const [currentTime, setCurrentTime] = useState(getCurrentTime());
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);

    return () => clearInterval(interval);
  }, []);
  function handleUserMenuOptions() {
    const isVisible = !isMenuVisible;
    setIsMenuVisible(isVisible);
  }
  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return (
    <div className={classes.FooterWrapper}>
      {isMenuVisible && <UserMenu />}
      <button
        onClick={handleUserMenuOptions}
        className={classes.FooterStartButton}
      >
        <img
          className={classes.FooterStartButtonImage}
          src={windowsLogo}
          alt="windows logo"
        />
        <span>Start</span>
      </button>
      <div className={classes.FooterOptionsWrapper}>
        <div className={classes.FooterOptions}>
          <img
            className={classes.FooterStartSound}
            src={windowsLogo}
            alt="windows logo"
          />
          <img
            className={classes.FooterStartAntivirus}
            src={windowsLogo}
            alt="windows logo"
          />
          <img
            className={classes.FooterStartInternet}
            src={windowsLogo}
            alt="windows logo"
          />
        </div>
        <span className={classes.CurrentTime}>{getCurrentTime()}</span>
      </div>
    </div>
  );
}

export default Footer;