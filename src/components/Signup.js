import React, { Component } from 'react';
import '../App.css';
import SignupForm from './SignupForm';

class Signup extends Component {
	render() {
		return (
			<main className='signupContainer'>
				<section className='signupLeftSide'>
				<p className="signupCreateAccount">create account</p>
					<h2
						style={{
							color: '#45ad97',
							marginBottom: '20px',
							letterSpacing: '2px',
							fontSize: '32px',
						}}
					>
						{/* <sp>COME IN,</sp> THE WATER IS GREAT! */}
					</h2>
					{/* <div className='profilePic'></div> */}
					{<SignupForm />}
					<p className='signupMessage'><sp style={{color:'white'}}>Already a member?</sp> Login</p>
				</section>
				<section className='signupRightSide'>
					<div className='signupWelcomeMessage'>
						<h1 className='signupWelcomeHead'>
							SIGN UP AND BUILD  <br /><sp style={{color:'#ee8c3a'}}>YOUR USER PROFILE TO </sp> <br /><sp style={{color:'#45ad97'}}>START POSTING!!!!</sp>
						</h1>
						<p>
							Welcome to our community! Whether you were ‘bawn here’, a
							long-time transplant or visiting the USVI, this app has something
							for you. Members can stay in the know about what is happening on
							the three sister islands. <sp style={{color: '#aa042d',fontWeight:'350'}}>St. Thomas, “Rock”,</sp> <sp style={{color: '#ee8c3a',fontWeight:'350'}}>St. John, “Love
							Island”,</sp> and <sp style={{color: '#45ad97',fontWeight:'350'}}>St. Croix, “Big Island”</sp>. Make sure you check out our
							<a href="./components/blog"> blog</a> for great articles that will make you feel even more a
							part of the family. <br /><br />Members can post questions, comment on places
							visited, or search our directory of growing list of member
							businesses, arts, or cultural enitities. Part of the goal of this
							app is to shine attention on those smaller local businesses and
							organizations that don’t have thousands of dollars to invest in
							marketing and advertising. We encourage you to support locally
							them as well as the well known spots. As the community grows, the app will grow in features. Check in often to see the growth.
							Please contact us with any questions, or suggestions you have.
							Thank you for joining our community and supporting the hard
							working people of the Virgin Islands.
						</p>
					</div>
				</section>
			</main>
		);
	}
}
export default Signup;
