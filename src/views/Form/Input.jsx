import React from 'react';
import PropsTypes from 'prop-types'
import classnames from 'classnames';

const Input = props =>{
//  ({ type, required, trim, min, max, className, onChange, id, name, value, label, placeholder, error, touched, isSubmitting, disabled }) => {

const { type, required, trim, min, max, className, onChange, id, name, value, label, placeholder, error, touched, isSubmitting, disabled } = props;

	// console.log('input--->', props);
	
	return (<div className="form-group">
		{label && <label htmlFor={id}>{label}</label>}
		<input
			type={type}
			className={classnames("", className)}
			id={id}
			name={name}
			onChange={onChange}
			value={value }
			placeholder={placeholder}
			disabled={(type==='submit' && isSubmitting) || disabled}
		/>
		{(touched && error ) && <div className={"text-danger"}>{error || 'this field is required' }</div>}
	</div>
	)
}

Input.prototype = {
	type: PropsTypes.string.isRequired,
	className: PropsTypes.string,
	id: PropsTypes.string.isRequired,
	name: PropsTypes.string,
	onChange: PropsTypes.func,
	value: PropsTypes.string,
	label: PropsTypes.string,
	placeholder: PropsTypes.string
}

Input.defaultProps = {
	type: "text",
	className: "form-control",
	onChange: e => console.log(e)
}

export default Input
