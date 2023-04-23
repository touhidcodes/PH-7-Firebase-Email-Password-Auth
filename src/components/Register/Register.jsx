import React from "react";

const Register = () => {
	return (
		<div>
			<h3>Please Register</h3>
			<form action=''>
				<input
					type='email'
					name='email'
					id='email'
					placeholder='Input your email'
				/>
				<br />
				<input
					type='password'
					name='password'
					id='password'
					placeholder='Input your Password'
				/>
				<br />
				<input type='submit' value='Register' />
			</form>
		</div>
	);
};

export default Register;
