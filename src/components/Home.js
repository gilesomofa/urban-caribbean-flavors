import React, { Component } from "react";
import "../App.css";
import  Login  from  "./Login"

class Home extends Component {
  render() {
    return (
      <div className="homePage">
         <h1>PLANNING A TRIP TO THE ISLANDS?</h1>
         <h2>Join our member's portal <span>"ISLAND TIMES" </span> for  tips from other Carribean travelers and locals</h2>


         
          <button className="signup">Sign Up Today</button>
          {/* <Login /> */}
          
      </div>
    );
  }
}

export default Home;
