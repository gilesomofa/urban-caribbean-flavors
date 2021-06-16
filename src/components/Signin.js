import React, { Component } from 'react';
import '../App.css';
import SignupForm from './SignupForm';

class Signin extends Component {
	render() {
		return (
			<main className='signinContainer'>
				<section className='leftSide'>
					<h2
						style={{
							color: 'ivory',
							marginBottom: '20px',
							letterSpacing: '2px',
							fontSize: '32px',
						}}
					>
						COME IN, THE WATER IS GREAT!
					</h2>
					{/* <div className='profilePic'></div> */}
					{<SignupForm />}
					<p className='signinMessage'>Already a member? Sign in</p>
				</section>
				<section className='rightSide'></section>
			</main>
		);
	}
}
export default Signin;
