import React, { useState, useRef, useEffect } from "react";
import classes from "./FolderList.module.css";
import FolderItem from "./FolderItem";

function FolderList({ data, activeWindowsId, setActiveWindowsId, virus }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);

  useEffect(() => {
    if (isMobile) {
      setActiveWindowsId([]);
    }
  }, []);
  function handleOpenWindows(windowId) {
    setActiveWindowsId((prevState) => [...new Set([...prevState, windowId])]);
  }
  function handleCloseWindows(windowId) {
    const filteredWindowsId = activeWindowsId.filter(
      (id) => id !== windowId.id
    );

    setActiveWindowsId(filteredWindowsId);
  }
  return (
    <div className={classes.FolderListWrapper}>
      {data.map((folderData, index) => (
        <FolderItem
          icon={folderData.icon}
          key={index}
          name={folderData.name}
          onClick={() => {
            handleOpenWindows(folderData.id);
          }}
        />
      ))}
      {activeWindowsId.map((id) => {
        const windowElement = data.find((element) => element.id === id);
        const Component = windowElement.Component;
        return (
          <Component
            key={id}
            close={() => {
              handleCloseWindows(windowElement);
            }}
            virus={virus}
          />
        );
      })}
      {/* 1.przemapuj po aktywnych oknac 2.wez folder data dla id 3.wyrenderuj */}
    </div>
  );
}

// Struktury danych
// Design Pattern

export default FolderList;
