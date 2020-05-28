import React from "react";
import { Link } from "react-router-dom";

import "./header.style.scss";

const Header = () => {
  return (
    <div className="header">
      <div className="header-inside">
        <div className="logo" />
        <ul className="top-nav">
          <Link to="/">
            <li>Home</li>
          </Link>
          <Link to="/quizes">
            <li>Tests</li>
          </Link>
          <Link to="/about">
            <li>About</li>
          </Link>
          <Link to="/contact">
            <li>Contact</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Header;
