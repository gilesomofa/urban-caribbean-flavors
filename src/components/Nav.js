import React from "react";
import "../App.css";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Nav() {
  return (
    <div className="navContainer">
      <div className="title">
          <h3 className="urban">URBAN </h3>
          <h3 className="caribbean">CARIBBEAN </h3>
          <h3 className="flavors">FLAVORS </h3>
          </div>
          <h2 id="cuisine">ARTS  |  CUISINE  |  CULTURE  |  NIGHTLIFE | TRAVEL</h2>
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
        <li>
          <a href="/" className="navLink">
            Login
          </a>
        </li>
      </ul>
      <FontAwesomeIcon icon="fa-bars" />

    </div>
    
  );
}

export default Nav;
