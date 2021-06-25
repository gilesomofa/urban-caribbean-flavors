import React,{Component} from "react";
class SignupForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      handleChange(event) {
        this.setState({value: event.target.value});
      }
    
      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
      }
    
      render() {
        return (
        <div>
          
          <form className='submitForm' onSubmit={this.handleSubmit}>
            <label>
              <input type="text" placeholder= 'username' value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              <input type="text" placeholder= 'email' value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              <input type="text" placeholder= 'password' value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              <input type="text" placeholder= 'confirm password' value={this.state.value} onChange={this.handleChange} />
            </label>
            
          </form>
          <form >
          <label>
              <input type="text"  class= "signupFormSubmit" placeholder= 'click to join' value={this.state.value} onChange={this.handleChange} />
            </label>
            </form>
          </div>
        );
      }
}

export default SignupForm;