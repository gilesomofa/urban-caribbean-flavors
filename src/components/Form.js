import React, { Component } from "react";
import "../App.css";


//create initial state as empty strings to receive input for mailing list signup

class MyForm extends Component {
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
          <div className="comments">
           
              <h3>Questions Comments</h3>
            
            <input type="text" placeholder="comments" />
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
              <label htmlFor="firstName"></label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                onChange={this.handleFirstNameChange}
                placeholder="First Name"
              />
              <label htmlFor="lastName"></label>
              <input
                type="text"
                id="lastName"
                name="lastName"
                onChange={this.handleLastNameChange}
                placeholder="Last Name"
              />
              <label htmlFor="email"></label>
              <input
                type="text"
                id="email"
                name="email"
                onChange={this.handleEmailChange}
                placeholder="Email"
              />
            </fieldset>
            <button className="">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}
export default MyForm;
