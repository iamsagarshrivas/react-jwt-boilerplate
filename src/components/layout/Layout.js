import React from 'react'
import Sidebar from './Sidebar'
// import { Form, Validator, Input, FormBuilder, FormGroup } from '../../views/Form'

function Layout() {

	const formData = {data: {
		email: 'aa',// ['sas',Validator.string().email()],
		password:'' //['',Validator.required]
	}}

	console.log('formData', formData);
	
	const onSubmitHandler = obj => {
		console.log('--------------------');
		console.log(obj);
		console.log('----------------');
	}

	return (<h1>hello</h1>
		// <Form
		// 	initialValues={formData}
		// 	onSubmit={onSubmitHandler}
		// >
		// 	<FormGroup name="data">
		// 	<Input
		// 		type="text"
		// 		label="email"
		// 		name="email"
		// 		placeholder="put your email here"
		// 	/>
		// 	<Input
		// 		type="password"
		// 		name="password"
		// 		label="password"
		// 		placeholder="enter password"
		// 	/>
		// 	</FormGroup>
		// 	<Input type="submit" value="click here" disabled={false} />
		// </Form>
	)
}

export default Layout
