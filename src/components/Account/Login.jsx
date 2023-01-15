import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './Login.module.css';

function Login() {
	return (
		<div className={classes.login_div}>
			<div>
				<input type="text" name="username" />
				<input type="password" name="password" />
				<button type="submit" className={classes.login_button}>
					login
				</button>
				<NavLink to="/crypto/createAccount">
					Dont have account? Create One
				</NavLink>
			</div>
		</div>
	);
}

export default Login;
