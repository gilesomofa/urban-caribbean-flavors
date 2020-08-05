import React from "react";
import "../App.css";

function Nav() {
  return (
    <div className="nav">
      <ul className="navList">
        <li>
          <a href="< Home />" className="navLink">
            Home
          </a>
        </li>
        <li>
          <a href="< About />" className="navLink">
            About
          </a>
        </li>
        <li>
          <a href="< Form />" className="navLink">
            Contact
          </a>
        </li>
        <li>
          <a href="< Blog />" className="navLink">
            Blog
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
