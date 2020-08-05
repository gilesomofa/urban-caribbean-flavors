import React  from "react";
import "../App.css";

function Form (){
    return (
      <div className = "contactForm">
        <form input="text" label="first name">
          <fieldset>
            <label for="firstName">First name:</label>
            <input type="text" id="firstName" name="firstName">
              {" "}
            </input>
            <label for="lastName">Last name:</label>
            <input type="text" id="lastName" name="lastName"></input>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email"></input>
          </fieldset>
        </form>
      </div>
    )
  };

export default Form;
