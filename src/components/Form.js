import React from "react";
import "../App.css";

function Form() {
  return (
    <div className="contactForm">
      <form action="/mailingList" method="POST">
        <fieldset>
          <p>Are you a</p>
          <div>
            <label for="business">Business</label>
            <input
              type="radio"
              id="business"
              name="userType"
              value="business"
            />
            <label for="visitor">Visitor</label>
            <input type="radio" id="visitor" name="userType" value="visitor" />
            <label for="resident">Resident</label>
            <input
              type="radio"
              id="resident"
              name="userType"
              value="resident"
            />
          </div>
          <label for="firstName">First name:</label>
          <input type="text" id="firstName" name="firstName" />
          <label for="lastName">Last name:</label>
          <input type="text" id="lastName" name="lastName"></input>
          <label for="email">Email:</label>
          <input type="email" id="email" name="email"></input>
        </fieldset>
        <button className="">Submit</button>
      </form>
      <div>
        <p>
          Here at Urban Caribbean Flavors, we are excited to share our <br />
          passion for all things Caribbean with our visitors. Don't be a Bombo <br />
          Rass and sign up for our newsletter and we will keep you informed of all of the amazing
          activities that happen throughout the year down here in the islands.{" "}
        </p>
      </div>
    </div>
  );
}

export default Form;
