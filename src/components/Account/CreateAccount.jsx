import React from 'react';
import { NavLink } from 'react-router-dom';

function CreateAccount() {
	return (
		<div>
			<div>
				<input type="text" name="username" />
				<input type="password" name="password" />
				<input type="password" name="reEnterPassword" />
				<button type="submit">Create Account</button>
				<NavLink to="/login">Already have an account? Login</NavLink>
			</div>
		</div>
	);
}

export default CreateAccount;
