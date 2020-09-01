import React from "react";
import "../App.css";

function Nav() {
  return (
    <div className="nav">
      <ul className="navList">
        <li>
          <a href="/" className="navLink">
            Home
          </a>
        </li>
        <li>
          <a href="/About " className="navLink">
            About 
          </a>
        </li>
        <li>
          <a href="/Form " className="navLink">
            Contact
          </a>
        </li>
        <li>
          <a href="/Gallery" className="navLink">
            Gallery
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
