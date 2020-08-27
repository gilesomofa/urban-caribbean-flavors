import React, { Component } from "react";
import "../App.css";

class Home extends Component {
  render() {
    return (
      <div className="homePage">
        <div className="title">
          <h1 className="urban">Urban </h1>
          <h1 className="caribbean">Caribbean </h1>
          <h1 className="flavors">Flavors </h1>
        </div>
        <div>
          <p className="subtitle">
            International Caribbean Culture and Lifestyle
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
