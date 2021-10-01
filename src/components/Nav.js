import React from 'react';
import '../App.css';
import NavLinks from './NavLinks';
import { useState } from 'react';

function Nav() {
	const [open, setOpen] = useState(false);
	return (
		<div className='navContainer'>
			{/* <div className='title'>
				<h3 className='urban'>U.S.V.I. </h3>
				<h3 className='caribbean'>BEYOND </h3>
				<h3 className='flavors'>BEACHES </h3>
			</div>  */}
			  <h2 id='cuisine'>
				{' '}
				<p style={{ color: '#45ad97' }}> Home</p> <p>Blog</p>{' '}
				<p style={{ color: '#ee8c3a' }}>Contact Us</p> 
			</h2>  

			<div className='hamburgerWrapper'>
				<div className='menu-btn' onClick={() => setOpen(!open)}>
					<div className={'links'}>{open && <NavLinks />}</div>
					<div className='menu-btn_burger'></div>
				</div>
			</div>
		</div>
	);
}

export default Nav; 
