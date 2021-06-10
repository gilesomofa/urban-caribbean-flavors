import React from 'react';
import '../App.css';

function Nav() {
	
	const menuItems = ['Home', 'Blog', 'About','Gallery', 'Contact' ];

	return (
		<div className='navContainer'>
			<div className='title'>
				<h3 className='urban'>U.S.V.I. </h3>
				<h3 className='caribbean'>BEYOND </h3>
				<h3 className='flavors'>BEACHES </h3>
			</div>
			<h2 id='cuisine'>
				{' '}
				<p style={{ color: '#45ad97' }}> CUISINE</p> <p>CULTURE</p>{' '}
				<p style={{ color: '#ee8c3a' }}>NIGHLTLIFE</p> <p>TRAVEL</p>
			</h2>
			<div className='hamburgerWrapper' >
			<div className='menu-btn' onClick={() => {menuItems.map(item =><ul><li>{item}</li></ul>)}}>
				<div className='menu-btn_burger'></div>
			</div>
			</div>
		</div>
	);
}

export default Nav;
