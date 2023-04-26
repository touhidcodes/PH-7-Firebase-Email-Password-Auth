import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import app from "../../Firebase/firebase.config";
import { Link } from "react-router-dom";

const auth = getAuth(app);
const Login = () => {
	const [error, setError] = useState("");
	const [submit, setSubmit] = useState("");

	const handleSubmit = (event) => {
		setError("");
		event.preventDefault();

		const form = event.target;
		const email = form.email.value;
		const password = form.password.value;

		if (!/(?=.*[A-Z])/.test(password)) {
			setError("Ensure string has two uppercase letters.");
			return;
		}
		if (!/(?=.*[!@#$&*])/.test(password)) {
			setError("Ensure string has one special case letter.");
			return;
		}
		if (!/(?=.*[0-9])/.test(password)) {
			setError("Ensure string has two digits.");
			return;
		}
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				// Signed in
				const loggedUser = result.user;
				console.log(loggedUser);
				setError("");
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				setError(error.message);
			});
	};
	return (
		<div className='mt-5'>
			<h3>Login</h3>
			<p className='text-danger'>{error}</p>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label for='exampleInputEmail1'>Email address</label>
					<input
						type='email'
						name='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
						placeholder='Enter email'
						required
					></input>
					<small id='emailHelp' className='form-text text-muted'>
						We'll never share your email with anyone else.
					</small>
				</div>
				<div className='form-group'>
					<label for='exampleInputPassword1'>Password</label>
					<input
						type='password'
						name='password'
						className='form-control'
						id='exampleInputPassword1'
						placeholder='Password'
						required
					></input>
				</div>
				<div className='form-group form-check'>
					<input
						type='checkbox'
						className='form-check-input'
						id='exampleCheck1'
					></input>
					<label className='form-check-label' for='exampleCheck1'>
						Remember me
					</label>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
			<p className='mt-3'>
				<small>
					New to this website? Please register...
					<Link to={"/register"}>Register</Link>
				</small>
			</p>
		</div>
	);
};

export default Login;
