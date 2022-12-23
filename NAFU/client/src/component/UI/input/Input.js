/** @format */

import React from "react";
import "./Input.css";
const Input = (props) => {
  return (
    <div>
      <input
        className="input"
        id={props.id}
        value={props.value}
        onChange={props.onChange}
        placeholder={props.placeholder}
        required
        name={props.name} //1
        type={props.type}
      />
    </div>
  );
};

export default Input;
