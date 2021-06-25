import React, { Component } from 'react';
import '../App.css';

 class LoginForm extends Component {
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
          <form className='submitForm' onSubmit={this.handleSubmit}>
            <label>
              <input type="text" placeholder= 'Name' value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              <input type="text" placeholder= 'Email' value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              <input type="text" placeholder= 'Password' value={this.state.value} onChange={this.handleChange} />
            </label>
            <label>
              <input type="text" placeholder= 'Click to Login' value={this.state.value} onChange={this.handleChange} />
            </label>
          </form>
        );
      }
}
export default LoginForm