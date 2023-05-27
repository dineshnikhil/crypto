import React from 'react';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

import classes from './Login.module.css';

function Login() {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');

	const usernameChangeHandler = (event) => {
		setUsername(event.target.value);
	};

	const passwordChangeHandler = (event) => {
		setPassword(event.target.value);
	};

	const submitHandler = (event) => {
		event.preventDefault();

		console.log(username, password);
		setPassword('');
		setUsername('');
	};
	return (
		<div className={classes.login_div}>
			<form onSubmit={submitHandler}>
				<input
					type="text"
					name="username"
					onChange={usernameChangeHandler}
					value={username}
				/>
				<input
					type="password"
					name="password"
					onChange={passwordChangeHandler}
					value={password}
				/>
				<button type="submit" className={classes.login_button}>
					login
				</button>
				<NavLink to="/createAccount">Dont have account? Create One</NavLink>
			</form>
		</div>
	);
}

export default Login;
