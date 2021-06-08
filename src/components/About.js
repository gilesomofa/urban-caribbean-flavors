import React from "react";
import "../App.css";

import Form from "../components/Form";

function About() {
  return (
    <div className="aboutPageContainer">
      
      <div className="aboutPageText">
        <h1 className="greenHead">Who are we?</h1>
        <p>
          First and foremost we are a team of learners who are passionate about Caribbean culture, history, arts,
          music, and let's not forget, food. We live in
          different locations internationally and enjoy traveling to our
          respective islands to soak up the vibes and inspiration as often as we
          can. 
        </p>
        <div className="aboutPageDo">
        
      </div>
        <br/><br/>
        <h1 className="redHead">What Do We Do?</h1>
        <p>
          We are here to make your trip to the islands more enjoyable. Cruising through? Visiting for a week? Expat? Local? We got your back. We are about creating an amazing experience for all. We are about creating a thriving, healthy, inclusive community. We support local businesses, artesans, culture, sustainability. 
  
        </p>
        <div className = "aboutTopper"><h3>Join our member's portal <span>" USVI BEYOND BEACHES" </span> for tips from other Carribean travelers and locals</h3>
      <button className="signup">Sign Up Today</button></div>
      </div>
      
      
      <div className="mailListForm">
        
      </div>
    </div>
  );
}

export default About;
