import React, { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../../Firebase/firebase.config";

const auth = getAuth(app);

const Register = () => {
	const [email, setEmail] = useState("");
	const handleEmailChange = (event) => {
		console.log(event.target.value);
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		console.log(event.target.value);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		console.log(email, password);
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				// Signed in
				const loggedUser = result.user;
				console.log(loggedUser);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.error(error);
			});
	};
	return (
		<div className='mt-5'>
			<h3>Please Register</h3>
			<form action='' onSubmit={handleSubmit}>
				<input
					className='mt-3 rounded  p-2'
					type='email'
					name='email'
					id='email'
					placeholder='Input your email'
					onChange={handleEmailChange}
				/>
				<br />
				<input
					className='mt-3 rounded  p-2'
					type='password'
					name='password'
					id='password'
					placeholder='Input your Password'
					onBlur={handlePasswordChange}
				/>
				<br />
				<input
					className='mt-3 btn btn-primary'
					type='submit'
					value='Register'
				/>
			</form>
		</div>
	);
};

export default Register;
