import "./App.css";
import React, { useState, useEffect } from "react";
import FolderList from "./components/mainFolders/windowsFolder/FolderList";
import Footer from "./components/mainFolders/footerComponent/Footer";
import moonButton from "./sources/moonbutton.png";
import sunButton from "./sources/sunbutton.png";
import { Analytics } from "@vercel/analytics/react";
import Industry from "./components/mainFolders/windowsFolder/Industry";
import Projects from "./components/mainFolders/windowsFolder/Projects";
import Education from "./components/mainFolders/windowsFolder/Education";
import Experience from "./components/mainFolders/windowsFolder/Experience";
import Computer from "./components/mainFolders/windowsFolder/Computer";
import AboutMe from "./components/mainFolders/windowsFolder/AboutMe";
import TicTacToe from "./components/mainFolders/windowsFolder/TicTacToe";
import Duck from "./components/mainFolders/windowsFolder/Duck";
import SkillsSet from "./components/mainFolders/windowsFolder/SkillsSet";
import Contact from "./components/mainFolders/windowsFolder/Contact";
import contact from "./sources/images/contact.png";
import projects from "./sources/images/projects.png";
import blocks from "./sources/images/experience.png";
import text from "./sources/images/text.png";
import setting from "./sources/setting.svg";
import game from "./sources/game.svg";
import computer from "./sources/images/computer.png";
import duck from "./sources/duck.png";
import check from "./sources/check.svg";
import education from "./sources/images/education.png";
import virus from "./sources/images/virus.png";
import gaduLogo from "./sources/gadu-chat-logo.webp";
import paintlogo from "./sources/images/paint.png";
import DogGif from "./components/Atoms/DogGif";
import minesweeper from "./sources/minesweeper.png";
import paint from "./sources/images/education.png";
import option from "./sources/images/Options.png";
import internet from "./sources/images/internet.png";
import Minesweeper from "./components/mainFolders/windowsFolder/mineswapperFolder/Minesweeper";
import Paint from "./components/mainFolders/windowsFolder/Paint";
import CountryStats from "./components/mainFolders/windowsFolder/CountryStats";
import Virus from "./components/mainFolders/windowsFolder/virusComponents/Virus";
import GaduChat from "./components/mainFolders/windowsFolder/chatGaduComponents/GaduChat";
import ChangeWallpaper from "./components/mainFolders/windowsFolder/changeWallpaper/ChangeWallpaper";

const WINDOWS_DATA = [
  {
    id: "About me",
    name: "About me",
    icon: text,
    Component: AboutMe,
    IsMinimalize: false,
  },
  {
    id: "Industry knowledge",
    name: "Industry knowledge",
    icon: setting,
    Component: Industry,
    IsMinimalize: false,
  },
  {
    id: "Projects",
    name: "Projects",
    icon: projects,
    Component: Projects,
    IsMinimalize: false,
  },
  {
    id: "Skills set",
    name: "Skills set",
    icon: check,
    Component: SkillsSet,
    IsMinimalize: false,
  },
  {
    id: "Education",
    name: "Education",
    icon: blocks,
    Component: Education,
    IsMinimalize: false,
  },
  {
    id: "Experience",
    name: "Experience",
    icon: education,
    Component: Experience,
    IsMinimalize: false,
  },
  {
    id: "Contact me",
    name: "Contact me",
    icon: contact,
    Component: Contact,
    IsMinimalize: false,
  },
  {
    id: "My Computer",
    name: "My Computer",
    icon: computer,
    Component: Computer,
    IsMinimalize: false,
  },
  {
    id: "Tic tac toe",
    name: "Tic tac toe",
    icon: game,
    Component: TicTacToe,
    IsMinimalize: false,
  },
  {
    id: "Duck.exe",
    name: "Duck.exe",
    icon: duck,
    Component: Duck,
    IsMinimalize: false,
  },
  {
    id: "Minesweeper",
    name: "Minesweeper",
    icon: minesweeper,
    Component: Minesweeper,
    IsMinimalize: false,
  },
  {
    id: "Paint",
    name: "Paint",
    icon: paintlogo,
    Component: Paint,
    IsMinimalize: false,
  },
  {
    id: "Country_Statistics.html",
    name: "Country_Statistics.html",
    icon: internet,
    Component: CountryStats,
    IsMinimalize: false,
  },
  {
    id: "Virus",
    name: "Virus",
    icon: virus,
    Component: Virus,
    IsMinimalize: false,
  },
  {
    id: "Gadu Chat",
    name: "Gadu Chat",
    icon: gaduLogo,
    Component: GaduChat,
    IsMinimalize: false,
  },
  {
    id: "Wallpaper Options",
    name: "Wallpaper Options",
    icon: option,
    Component: ChangeWallpaper,
    IsMinimalize: false,
  },
];

function App() {
  const [windowsData, setWindowsData] = useState(WINDOWS_DATA);
  const [angelHour, setAngelHour] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 700);
  const [buttonIcon, setButtonIcon] = useState(moonButton);
  const [currentTheme, setTheme] = useState("light");
  const [clickedWindow, setClickedWindow] = useState("About me");
  const [activeWindowsId, setActiveWindowsId] = useState([
    "Duck.exe",
    "Skills set",
    "About me",
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, "0");
      const minutes = now.getMinutes().toString().padStart(2, "0");
      const isAngelHour =
        (hours === "01" && minutes === "01") ||
        (hours === "02" && minutes === "02") ||
        (hours === "03" && minutes === "03") ||
        (hours === "04" && minutes === "04") ||
        (hours === "05" && minutes === "05") ||
        (hours === "06" && minutes === "06") ||
        (hours === "07" && minutes === "07") ||
        (hours === "08" && minutes === "08") ||
        (hours === "09" && minutes === "09") ||
        (hours === "10" && minutes === "10") ||
        (hours === "11" && minutes === "11") ||
        (hours === "12" && minutes === "12") ||
        (hours === "13" && minutes === "13") ||
        (hours === "14" && minutes === "14") ||
        (hours === "15" && minutes === "15") ||
        (hours === "16" && minutes === "16") ||
        (hours === "17" && minutes === "17") ||
        (hours === "18" && minutes === "18") ||
        (hours === "19" && minutes === "19") ||
        (hours === "20" && minutes === "20") ||
        (hours === "21" && minutes === "21") ||
        (hours === "22" && minutes === "22") ||
        (hours === "23" && minutes === "23") ||
        (hours === "00" && minutes === "00");

      setAngelHour(isAngelHour ? `${hours}:${minutes}` : null);
    }, 1000);

    const handleResize = () => {
      setIsMobile(window.innerWidth < 700);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const virus = () => {
    setActiveWindowsId(["Virus", "Virus"]);
  };

  const toggleTheme = () => {
    if (currentTheme === "light") {
      setButtonIcon(sunButton);
      document.documentElement.setAttribute("data-theme", "dark");
      setTheme("dark");
      return;
    }

    document.documentElement.setAttribute("data-theme", "light");
    setTheme("light");
    setButtonIcon(moonButton);
  };

  const minimizedWindows = windowsData.filter((window) => window.IsMinimalize);
  console.log("windowsData    ", windowsData);
  return (
    <div className={`app-wrapper`}>
      <Analytics />
      {angelHour && <div className="angel-hour-message">{`${angelHour}`}</div>}

      <FolderList
        setWindowsData={setWindowsData}
        setActiveWindowsId={setActiveWindowsId}
        activeWindowsId={activeWindowsId}
        data={windowsData}
        virus={virus}
      />

      <button className="moonButton" onClick={toggleTheme}>
        <img alt="switch theme button" src={buttonIcon} />
      </button>
      {!isMobile && <DogGif />}
      <Footer
        setWindowsData={setWindowsData}
        windowsData={windowsData}
        setClickedWindow={setClickedWindow}
        clickedWindow={clickedWindow}
        setActiveWindowsId={setActiveWindowsId}
        activeWindowsId={activeWindowsId}
        minimizedWindows={minimizedWindows}
      />
    </div>
  );
}

export default App;
