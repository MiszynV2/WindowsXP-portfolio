import React from "react";
import classes from "./SkillsSet.module.css";
import image from "../../sources/check.svg";
import CloseButton from "../../sources/close.svg";
import Window from "../Atoms/Window";
import TitleBar from "../Atoms/TitleBar";
import Options from "../Atoms/Options";

const SKILLSET_DATA = [
  { htmlFor: "react", text: "react.js" },
  { htmlFor: "html", text: "html" },
  { htmlFor: "css", text: "css" },
  { htmlFor: "fast", text: "fast learner" },
  { htmlFor: "minded", text: "open minded" },
  { htmlFor: "people", text: "open for people" },
];
function SkillsSet({ close }) {
  const options = ["File", "Edit", "Format", "View", "Help"];
  const title = "Skills Set";
  return (
    <Window>
      <TitleBar image={image} title={title} close={close} />
      <Options options={options} />
      <div className={classes.TextWrapper}>
        {SKILLSET_DATA.map((element, index) => {
          return (
            <div key={index}>
              <input
                className={classes.InputReact}
                type="checkbox"
                htmlFor={element.htmlFor}
              ></input>
              <label className={classes.LabelReact} htmlFor={element.htmlFor}>
                {element.text}
              </label>
            </div>
          );
        })}
      </div>
    </Window>
  );
}

export default SkillsSet;
