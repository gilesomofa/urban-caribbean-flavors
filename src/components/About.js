import React from 'react';
import '../App.css';
import Form from '../components/Form';

function About() {
	return (
		<div className='aboutPageContainer'>
			<div className='aboutPageText'>
				<h1 className='greenHead'>Who are we?</h1>
				<p>
					I am a native Virgin Islander who loves coming home to visit and never
					takes for granted the magic that is the USVI. My passion for Caribbean
					people, our culture, history, arts, music, and FOOD is unrivaled! This
					site is my ode to this dynamic and beautiful place I call "HOME".
				</p>
				<div className='aboutPageDo'></div>
				<br />
				<br />
				<h1 className='redHead'>What do we do?</h1>
				<p>
					U.S.V.I. Beyond Beaches, was created to make your stay in the islands more
					enjoyable. Cruising through? Visiting for a week? Expat? Local? We got
					your back. We are about creating an amazing experience for all. We are
					leveraging technology and local know how to create a thriving,
					healthy, community where ALL are welcome. This site is part blog, app,
					and all Comm-unity platform where we support local business, artists,
					and culture, and share information on current events and happenings of
					interest.
				</p>
				<div className='aboutTopper'>
					<h3>
						Join our member's portal <span>" U.S.V.I. BEYOND BEACHES" </span>{' '}
						for connections, info, and tips from other Carribean travelers and locals.
					</h3>
					<button className='signup'>Sign Up Today</button>
				</div>
			</div>

			<div className='aboutRightSide'>
				<h2 className='aboutRightSideHead'>
					<span style={{ color: 'aa042d' }}>HI,</span> <br /> I'M GILES. I HOPE
					YOU ENJOY THIS SITE AS MUCH AS I ENJOY BUILDING IT!
				</h2>

				<section className='rightSideWrapper'></section>
			</div>
			<div className='contactButton'>
				{' '}
				<button className='contactMe'>Contact Me</button>
			</div>
		</div>
	);
}

export default About;
