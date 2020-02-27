import React, { useState } from 'react'
import './Login.css'
import Logo from '../../assets/img/ic_fingerprint.png'
import { get, post } from '../../axios'

function Login() {
	const [formData, setFormData] = useState({
		email: 'admin@msmail.com',
		password: '123456'
	});

	const onChangeHandler = (e)=>{
		setFormData({...formData,[e.target.name]:e.target.value})
	}

	const onSubmitHandler = e => {
		e.preventDefault();
		post('/auth/login',formData)
		.then(
			res => console.log(res)
		)
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
						type="submit"
						className="fadeIn fourth"
						value="Log In"
					/>
				</form>
				<div id="formFooter">
					<div className="row">
						<div className="col-md-6">
							<a className="underlineHover" href="/auth/forget-password" >Forgot Password?</a>
						</div>
						<div className="col-md-6">
							<a className="underlineHover" href="/auth/signup" >New Here?</a>
						</div>
					</div>

				</div>

			</div>
		</div>
	)
}

export default Login