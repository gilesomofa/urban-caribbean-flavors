import React from "react";
import "../App.css";
import Form from "../components/Form";

function About() {
  return (
    <div className="aboutPageContainer">
      <div className="aboutPageText">
        <h1 className="greenHead">Who are we?</h1>
        <p>
          We are a team of creatives, designers, musicians, artists, and
          developers who, by birth, virture of engagement, exposure, and/or
          travel that is passionate about Caribbean culture, history, arts,
          music, sustainability, and let's not forget, food. We live in
          different locations internationally and enjoy traveling to our
          respective islands to soak up the vibes and inspiration as often as we
          can.
        </p>
        {/* <div className="aboutPageDo"> */}
        <br/><br/>
        <h1 className="redHead">What Do We Do?</h1>
        <p>
          Our website is inspired by and highlights the growing network of
          ecologically minded traditionalists, artesans, musicians, scholars,
          and businesses who operate in equitable, sustainable, and culturally
          responsive ways. We will share the stories of these inspiring
          characters who champion the valued principals of the Caribbean
          Character. It is our mission to amplify the reach, engagement, and
          success of these people and their projects.
        </p>
      {/* </div> */}
      </div>
      <div className="mailListForm">
        
      </div>
    </div>
  );
}

export default About;
