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
				<div className='mb-3'>
					<label for='exampleInputEmail1' className='form-label'>
						Email address
					</label>
					<input
						type='email'
						name='email'
						className='form-control'
						id='exampleInputEmail1'
						aria-describedby='emailHelp'
					></input>
					<div id='emailHelp' className='form-text'>
						We'll never share your email with anyone else.
					</div>
				</div>
				<div className='mb-3'>
					<label for='exampleInputPassword1' className='form-label'>
						Password
					</label>
					<input
						type='password'
						name='password'
						className='form-control'
						id='exampleInputPassword1'
					></input>
				</div>
				<div className='mb-3 form-check'>
					<input
						type='checkbox'
						className='form-check-input'
						id='exampleCheck1'
					></input>
					<label className='form-check-label' for='exampleCheck1'>
						Accept Terms and Conditions
					</label>
				</div>
				<button type='submit' className='btn btn-primary'>
					Submit
				</button>
			</form>
		</div>
	);
};

export default Register_BS;
