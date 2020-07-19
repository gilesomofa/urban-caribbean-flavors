import React from "react";
import "../App.css";

function Nav() {
  return (
    <div className="nav">
      <ul className="navList">
        <li>
          <a href="#" className="navLink">Home</a>
        </li>
        <li>
        <a href="#" className="navLink">About</a>
        </li>
        <li>
        <a href="#" className="navLink">Contact</a>
        </li>
        <li>
        <a href="#" className="navLink">Blog</a>
        </li>
      </ul>
    </div>
  );
}

export default Nav;
