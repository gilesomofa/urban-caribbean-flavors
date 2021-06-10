import React, { Component } from 'react';
import '../App.css';
import SignupForm from "./SignupForm";
class Signin extends Component {
	render() {
		return (
			<main className='signinContainer'>
				<section className='leftSide'>
				<div className='profilePic'></div>

					
					{ <SignupForm/> }</section>
				
				<section className='rightSide'></section>
			</main>
		);
	}
}
export default Signin;
