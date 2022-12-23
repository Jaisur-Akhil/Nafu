/** @format */

import React from "react";
import "./Nav.css";
const Nav = (props) => {
  return (
    <div className="Nav">
      <ul className="Nav-ul">
        <li>
          <a className="Nav-logo"></a>{" "}
        </li>
        <li>Username</li>
        <li>Email ID</li>
        <li>Mobile Number</li>
      </ul>
    </div>
  );
};

export default Nav;
