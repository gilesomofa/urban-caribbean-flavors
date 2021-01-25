import React from "react";
import "../App.css";

import Form from "../components/Form";

function About() {
  return (
    <div className="aboutPageContainer">
      <div className = "aboutTopper"><h3>Join our member's portal <span>"ISLAND TIMES" </span> for tips from other Carribean travelers and locals</h3>
      <button className="signup">Sign Up Today</button></div>
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
          We are here to make your trip to the islands more enjoyable, whether you're cruising through or spending a couple weeks traveling around and want to go beyond being a tourist. We will share the stories of  inspiring places and the 
          people who champion the valued principals of the Caribbean
          Hospitality, Character and Culture. We will also look forward to hearing your stories about your journey in the islands as well. You can share them in our members app. Click the link to sign up.
        </p>
      </div>
      
      <div className="mailListForm">
        
      </div>
    </div>
  );
}

export default About;
