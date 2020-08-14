import React, { Component } from "react";
import "../App.css";

//create initial state as empty strings to receive input for mailing list signup

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      businessName: "",
      businessUrl: "",
      isChecked: false,
    };
  }
  //handlers for form text inputss
  handleFirstNameChange = (event) => {
    this.setState({
      firstName: event.target.value,
    });
  };

  handleLastNameChange = (event) => {
    this.setState({
      lastName: event.target.value,
    });
  };

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.firstName} ${this.state.lastName} ${this.state.email}`);
    event.preventDefault();
  };

  isChecked = () => {
    console.log("checking radio checked or not");
  };

  //The render function is required for all react class Components, and remember
  //A return is required and can only return one parent element. So make sure there is a wrapper of some sort
  render() {
    //holders for state to be sent to data base
    const { firstName, lastName, email } = this.state;

    return (
      <div className="formContainer">
        <div className="contactForm">
          <div className="formText">
            <h1>Hey, Don't Be Shy!</h1>
            <br/>
            <br/>
            <p>
              <h2>
                We'd love to here from you. Let us know what we can do for you.
              </h2>
            </p>
          </div>
          <div className="comments">
            <p>
              <h4>Have a question or comment, let us know.</h4>
            </p>
            <input type="text" />
            <button className="">Submit</button>
          </div>
          <form
            onSubmit={this.handleSubmit}
            action="/mailingList"
            method="POST"
          >
            <div className="radio">
              <label htmlFor="business">Business</label>
              <input
                type="radio"
                id="business"
                name="userType"
                value="business"
              />
              <label htmlFor="visitor">Visitor</label>
              <input
                type="radio"
                id="visitor"
                name="userType"
                value="visitor"
              />
              <label htmlFor="resident">Resident</label>
              <input
                type="radio"
                id="resident"
                name="userType"
                value="resident"
              />
            </div>
            <fieldset>
              <label htmlFor="firstName">First name:</label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={this.handleFirstNameChange}
              />
              <label htmlFor="lastName">Last name:</label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={this.handleLastNameChange}
              />
              <label htmlFor="email">Email:</label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={this.handleEmailChange}
              />
            </fieldset>
            <button className="">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
export default Form;
