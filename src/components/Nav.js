import React from "react";
import "../App.css";

function Nav() {
  return (
    <div className="navContainer">
      <div className="title">
          <h3 className="urban">Urban </h3>
          <h3 className="caribbean">Caribbean </h3>
          <h3 className="flavors">Flavors </h3>
          </div>
          <h2 id="cuisine">ARTS  |  CUISINE  |  CULTURE  |  NIGHTLIFE</h2>
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
          <a href="/Blog " className="navLink">
            Blog
          </a>
        </li>
        
      </ul>

    </div>
  );
}

export default Nav;
