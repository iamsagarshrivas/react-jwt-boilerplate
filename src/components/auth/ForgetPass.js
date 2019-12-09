import React, { useState } from 'react'
import Logo from '../../assets/img/ic_fingerprint.png'
import { post } from '../../axios'

function ForgetPass() {
	const [email, setEmail] = useState('');

	const onChangeHandler = (e) => {
		setEmail( e.target.value )
	}

	const onSubmitHandler = e => {
		e.preventDefault();
		post('/auth/forgot-password', {email})
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
						value={email}
						onChange={onChangeHandler}
					/>
					<input
						type="submit"
						className="fadeIn fourth"
						value="Send OTP"
					/>
				</form>
				<div id="formFooter">
					<div className="row">
						<div className="col-md-6">
							<a className="underlineHover" href="/auth/signin" >Sign In</a>
						</div>
						<div className="col-md-6">
							<a className="underlineHover" href="/auth/signup" >Sign Up</a>
						</div>
					</div>

				</div>

			</div>
		</div>
	)
}

export default ForgetPass