import React from "react";
import "./Button2.css";
// Outer CSS
const Button2 = ({ propDisabled }) => {
  const btnClasses = ["Button"];

  if (propDisabled) {
    btnClasses.push("Button--disabled");
  }

  return <button className={btnClasses.join(" ")}>Another submit</button>;
};

export default Button2;
