import React from "react";
import "./header.style.css";
const Header = () => {
  return (
    <div className="header">
      <div className="header-sub">
        <div className="logo" />
        <ul>
          <li>About</li>
          <li>Other</li>
          <li>Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
