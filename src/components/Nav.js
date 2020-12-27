import React from "react";
import "../App.css";

function Nav() {
  return (
    <div className="nav">
      <div className="title">
          <h1 className="urban">Urban </h1>
          <h1 className="caribbean">Caribbean </h1>
          <h1 className="flavors">Flavors </h1>
          <p> Cuisine, Arts, Culture, and Nightlife</p>


        </div>

       
      
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
