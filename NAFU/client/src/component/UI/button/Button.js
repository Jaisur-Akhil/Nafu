/** @format */

import React from "react";
import "./Button.css";
const Button = (props) => {
  return (
    <div>
      <button
        className="button"
        type={props.type}
        id={props.id}
        onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
};

export default Button;
