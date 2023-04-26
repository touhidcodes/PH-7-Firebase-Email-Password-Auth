import React, { useState } from "react";
import {
	createUserWithEmailAndPassword,
	getAuth,
	sendEmailVerification,
	signInWithEmailAndPassword,
	updateProfile,
} from "firebase/auth";
import app from "../../Firebase/firebase.config";
import { Link } from "react-router-dom";

const Register = () => {
	const auth = getAuth(app);
	const [regError, setRegError] = useState("");
	const [success, setSuccess] = useState("");

	const handleEmailChange = (event) => {
		// console.log(event.target.value);
	};

	const handlePasswordChange = (event) => {
		// console.log(event.target.value);
	};

	const handleSubmit = (event) => {
		// 1. prevent reload
		event.preventDefault();
		setSuccess("");
		setRegError("");
		// 2. collect form data
		const email = event.target.email.value;
		const password = event.target.password.value;
		const name = event.target.name.value;
		// Validate Password
		if (!/(?=.*[A-Z])/.test(password)) {
			setRegError("Ensure string has two uppercase letters.");
			return;
		}
		if (!/(?=.*[0-9])/.test(password)) {
			setRegError("Ensure string has two digits.");
			return;
		}
		// 3. create user in firebase
		createUserWithEmailAndPassword(auth, email, password)
			.then((result) => {
				// Signed in
				const loggedUser = result.user;
				console.log(loggedUser);
				setRegError("");
				event.target.reset();
				setSuccess("User has been created successfully...");
				verifyEmail(loggedUser);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setRegError(errorMessage);
				console.error(error);
			});
		handleUserName(name);
	};

	const verifyEmail = (user) => {
		sendEmailVerification(user).then((result) => {
			alert("Email verification sent!");
			// Email verification sent!
			// ...
		});
	};

	const handleUserName = (name) => {
		updateProfile(auth.currentUser, {
			displayName: name,
		})
			.then((result) => {
				// Profile updated!
				setSuccess("Profile updated!");
				// ...
			})
			.catch((error) => {
				// An error occurred
				setRegError(error.message);
				// ...
			});
	};
	return (
		<div className='mt-5'>
			<h3>Please Register</h3>
			<p className='text-danger'>{regError}</p>
			<form action='' onSubmit={handleSubmit}>
				<input
					className='mt-3 rounded  p-2'
					type='text'
					name='name'
					id='name'
					placeholder='Input your name'
					required
				/>
				<br />
				<input
					className='mt-3 rounded  p-2'
					type='email'
					name='email'
					id='email'
					placeholder='Input your email'
					onChange={handleEmailChange}
					required
				/>
				<br />
				<input
					className='mt-3 rounded  p-2'
					type='password'
					name='password'
					id='password'
					placeholder='Input your Password'
					onBlur={handlePasswordChange}
					required
				/>
				<br />
				<input
					className='mt-3 btn btn-primary'
					type='submit'
					value='Register'
				/>
			</form>
			<p className='mt-3'>
				<small>
					Already have an account? Please login...
					<Link to={"/login"}>Log in</Link>
				</small>
			</p>
			<p className='text-primary mt-3'>{success}</p>
		</div>
	);
};

export default Register;
