import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
	render() {
		return (
			<div className='homePage'>
				<div className='signupContainer'>
					<input type='text' placeholder='Email' />
					<input type='text' placeholder='Password' />
					<button className='login'>Sign Up</button>
					<button className='login'>Member Login</button>
				</div>
			</div>
		);
	}
}

export default Home;
