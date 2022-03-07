import React, { useState, useEffect } from 'react';
import { FaSignInAlt } from 'react-icons/fa';

function Login() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
	});

	const { email, password } = formData;

	const setFormValue = (value, name) => {
		setFormData((oldVal) => ({ ...oldVal, [name]: value }));
	};

	const onSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<>
			<section className="heading">
				<h1>
					<FaSignInAlt />
					Login
				</h1>
				<p>Please sign in</p>
			</section>

			<section className="form">
				<form onSubmit={onSubmit}>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							id="email"
							name="email"
							value={email}
							placeholder="Enter your email"
							onChange={(e) => setFormValue(e.target.value, e.target.name)}
						/>
					</div>
					<div className="form-group">
						<input
							type="password"
							className="form-control"
							id="password"
							name="password"
							value={password}
							placeholder="Enter password"
							onChange={(e) => setFormValue(e.target.value, e.target.name)}
						/>
					</div>
					<div className="form-group">
						<button type="submit" className="btn btn-block">
							Submit
						</button>
					</div>
				</form>
			</section>
		</>
	);
}

export default Login;
