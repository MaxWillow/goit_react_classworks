import React from "react";
import styles from "./Button3.module.css";

console.log(styles); // object with unique classes

const Button3 = ({ propDisabled }) => (
  <button className={propDisabled ? styles.button : styles.disabled}>
    Submit #3
  </button>
);

export default Button3;
