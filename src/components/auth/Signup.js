import React, { useState } from 'react'
import Logo from '../../assets/img/ic_fingerprint.png'

function Signup() {
	const [formData, setFormData] = useState({
		email: '',
		password: '',
		confirmPassword: ''
	});

	const onChangeHandler = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value })
	}

	const onSubmitHandler = e => {
		e.preventDefault();
		console.log('formData', formData)
	}

	return (
		<div className="wrapper fadeInDown">
			<div id="formContent">
				<div className="fadeIn first">
					<img className="w-25" src={Logo} id="icon" alt="User Icon" />
				</div>
				<form onSubmit={onSubmitHandler}>
					<input
						type="text"
						id="login"
						className="fadeIn second"
						name="email"
						placeholder="email or username"
						value={formData.email}
						onChange={onChangeHandler}
					/>
					<input
						type="password"
						id="password"
						className="fadeIn third"
						name="password"
						placeholder="password"
						value={formData.password}
						onChange={onChangeHandler}
					/>

					<input
						type="password"
						id="confirmPassword"
						className="fadeIn third"
						name="confirmPassword"
						placeholder="confirm password"
						value={formData.confirmPassword}
						onChange={onChangeHandler}
					/>

					<input
						type="submit"
						className="fadeIn fourth"
						value="Register"
					/>
				</form>
				<div id="formFooter">
					<div className="row">
						<div className="col-md-6">
							<a className="underlineHover" href="/auth/forget-password" >Forgot Password?</a>
						</div>
						<div className="col-md-6">
							<a className="underlineHover" href="/auth/signin" >Have an account?</a>
						</div>
					</div>

				</div>

			</div>
		</div>
	)
}

export default Signup
