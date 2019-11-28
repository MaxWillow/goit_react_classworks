import React from "react";
import T from "prop-types";

const buttonStyles = {
  display: "inline-flex",
  margin: "0 4px",
  padding: "8px 24px",
  border: 0,
  borderRadius: 2,
  fontSize: 14,
  fontFamily: "inherit",
  cursor: "pointer"
};

const Button = ({ propDisabled }) => (
  <button
    // Inline styles - isn't good option
    style={{
      ...buttonStyles,
      backgroundColor: propDisabled ? "#0000001f" : "#2196f3",
      color: propDisabled ? "#00000042" : "#ffffff"
    }}
    disabled={propDisabled}
  >
    Submit
  </button>
);

export default Button;
