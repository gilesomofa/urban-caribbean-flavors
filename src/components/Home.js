import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
	render() {
		return (
			<div className='homePage'>
				<section className='signupContainer'>
					<p>
						Join our Online COMM-UNITY to stay in the know of what's happening
						in THE U.S.V.I. Come as a tourist Come back as FAMILY!
					</p>
					<div className='logbuttons'>
						<button>login</button>
						<button>sign up</button>
					</div>
				</section>
			</div>
		);
	}
}

export default Home;
