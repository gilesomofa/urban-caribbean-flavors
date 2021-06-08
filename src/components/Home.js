import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
	render() {
		return (
			<div className='homePage'>
				<section className="signupContainer">
					<form action="login">
						<input type="text" placeholder = "login" />
						<input type="text" placeholder = "sign in" />
						

					</form>
				</section>
			</div>
		);
	}
}

export default Home;
