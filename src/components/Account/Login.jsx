import React from 'react';
import { NavLink } from 'react-router-dom';

function Login() {
	return (
		<div>
			<div>
				<input type="text" name="username" />
				<input type="password" name="password" />
				<button type="submit">login</button>
				<NavLink to="/createAccount">Dont have account? Create One</NavLink>
			</div>
		</div>
	);
}

export default Login;
