import React, { useState } from "react";

// const [pass, setPass] = useState("");

const Register = () => {
	const [email, setEmail] = useState("");
	const handleEmailChange = (event) => {
		console.log(event.target.value);
		setEmail(event.target.value);
	};

	const handlePasswordChange = (e) => {
		console.log(e.target.value);
	};

	const handleSubmit = (e) => {
		event.preventDefault();
		const email = e.target.email.value;
		const pass = e.target.password.value;
		console.log(email, pass);
	};
	return (
		<div>
			<h3>Please Register</h3>
			<form action='' onSubmit={handleSubmit}>
				<input
					type='email'
					name='email'
					id='email'
					placeholder='Input your email'
					onChange={handleEmailChange}
				/>
				<br />
				<input
					type='password'
					name='password'
					id='password'
					placeholder='Input your Password'
					onBlur={handlePasswordChange}
				/>
				<br />
				<input type='submit' value='Register' />
			</form>
		</div>
	);
};

export default Register;
