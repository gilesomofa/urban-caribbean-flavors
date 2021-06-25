import React from 'react';
import '../App.css';
import Form from '../components/Form';

function About() {
	return (
		<div className='aboutPageContainer'>
			<section className='about left'>
				<h1 className='greenHead'>Who are we?</h1>
				<p>
					I am a native Virgin Islander, who grew up in the US and lived internationally as well, who never takes for granted the magic
					that is the USVI. My passion for Caribbean people, our culture,
					history, arts, music, natural resources, and FOOD is unrivaled! This
					site is my ode to this dynamic, complex, and beautiful place that, no matter where I am in the world, I call "HOME". 
				</p>
				<h2 className='redHead'>What do we do?</h2>
				<p>
					U.S.V.I. Beyond Beaches, was created to make your stay in the islands
					more enjoyable. Cruising through? Visiting for a week? Expat? Local?
					We got your back. We are about creating an amazing experience for all.
					We are leveraging technology and local know how to create a thriving,
					healthy, community where ALL are welcome. This site is a blog, an app,
					and an all Comm-unity platform where we support local business,
					artists, and culture, and share information on current events and
					happenings of interest. 
				</p>
			</section>
			<section className='about right'>
			<div className='right pic'></div>

			<h2 className='about right head'>
					<span style={{ color: '#aa042d' }}>HI! I'M GILES.</span> <br /> I HOPE YOU
					ENJOY THIS SITE AS MUCH AS{' '}
					<span style={{ color: '#ee8c3a' }}> <br />	I ENJOY BUILDING IT!</span>
				</h2>
				<button className="reachOut">Holler!</button>
				
			</section>
		</div>
	);
}

export default About;
