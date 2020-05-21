import React from "react";
import { Link } from "react-router-dom";

import "./header.style.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-sub">
        <div className="logo" />
        <ul>
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/tests">
            <li>Tests</li>
          </Link>
          <Link to="/about">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
