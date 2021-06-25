import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
	render() {
		return (
			<div className='homePage'>
			<div className='homeBanner'>
				<h1><span style={{color:'#ee8c3a'}}>U.S.V.I.</span> <br /> <span style={{color:'#aa042d'}}>BEYOND </span><br /><span style={{color:'#45ad97'}}>BEACHES</span></h1>
				<p>Online COMMUNITY Guide to what's happening in THE U.S.V.I. Come 
					as a tourist. Come back as FAMILY. </p>
					<div className="homeButtons">
						<button className="login">login</button>
						<button className="signup">sign up</button>
					</div>
			</div>
			</div>
		);
	}
}

export default Home;
