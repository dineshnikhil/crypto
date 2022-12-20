import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Nav.module.css';
// importing the icons here
import { faMoon } from '@fortawesome/free-solid-svg-icons';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Nav() {
	// ===== setting the logic for the dark mode ==========
	// setting the usestate for is_dark
	const [is_dark, set_is_dark] = useState(true);
	const [icon, set_icon] = useState(faMoon);
	// creating the is_dark_handler is change is_dark state.
	function is_dark_handler() {
		console.log('dark is here');
		if (is_dark) {
			document.documentElement.setAttribute('data-theme', 'dark');
			set_is_dark(false);
			set_icon(faSun);
		} else {
			document.documentElement.setAttribute('data-theme', 'light');
			set_is_dark(true);
			set_icon(faMoon);
		}
	}
	// ======================================================
	return (
		<div className={classes.nav}>
			<div>
				<NavLink to="/">CryptoInfo</NavLink>
			</div>
			<div>
				<button onClick={is_dark_handler}>
					<FontAwesomeIcon icon={icon} />
				</button>
				<NavLink to="/login">
					<button>Login</button>
				</NavLink>
			</div>
		</div>
	);
}

export default Nav;
