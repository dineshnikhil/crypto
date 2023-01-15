import React from 'react';
import { NavLink } from 'react-router-dom';

import classes from './CreateAccount.module.css';

function CreateAccount() {
	return (
		<div className={classes.create_account_div}>
			<div>
				<input type="text" name="username" />
				<input type="password" name="password" />
				<input type="password" name="reEnterPassword" />
				<button type="submit">Create Account</button>
				<NavLink to="/crypto/login">Already have an account? Login</NavLink>
			</div>
		</div>
	);
}

export default CreateAccount;
