import React, { useState } from 'react';
import '../App.css';

function Dropdown({ title, items, multiSelect = false }) {
	const [open, setOpen] = useState(false);
	const [selection, setSelection] = useState([]);
  const toggle = () => setOpen(!open);

  function handleOnClick() {}
	return (
		<div className='dd-wrapper'>
			<div
				tabIndex={0}
				className='dd-header'
				role='button'
				onKeyPress={() => toggle(!open)}
				onClick={() => toggle(!open)}
			></div>
			<div className='header-dd_title'>
				<p className='dd-header_title--bold'>{title}</p>
			</div>
		</div>
	);
}
// <div className="dropdown">
//           <ul className="navList">
//         <li>
//           <a href="/" className="navLink">
//             Home
//           </a>
//         </li>
//         <li>
//           <a href="/About " className="navLink">
//             About
//           </a>
//         </li>
//         <li>
//           <a href="/Form " className="navLink">
//             Contact
//           </a>
//         </li>
//         <li>
//           <a href="/Blog " className="navLink">
//             Blog
//           </a>
//         </li>
//         <li>
//           <a href="/" className="navLink">
//             Login
//           </a>
//         </li>
//       </ul>
//       </div>

export default Dropdown;
