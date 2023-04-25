import React from "react";

const Register_BS = () => {
	const handleSubmit = (event) => {
		event.preventDefault();
		const email = event.target.email.value;
		const password = event.target.password.value;
		console.log(email, password);
	};
	return (
		<div className='mt-5'>
			<form onSubmit={handleSubmit}>
				<div class='mb-3'>
					<label for='exampleInputEmail1' class='form-label'>
						Email address
					</label>
					<input
						type='email'
						name='email'
						class='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
					></input>
					<div id='emailHelp' class='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div class='mb-3'>
					<label for='exampleInputPassword1' class='form-label'>
						Password
					</label>
					<input
						type='password'
						name='password'
						class='form-control'
						id='exampleInputPassword1'
					></input>
				</div>
				<div class='mb-3 form-check'>
					<input
						type='checkbox'
						class='form-check-input'
						id='exampleCheck1'
					></input>
					<label class='form-check-label' for='exampleCheck1'>
						Accept Terms and Conditions
					</label>
				</div>
				<button type='submit' class='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Register_BS;
