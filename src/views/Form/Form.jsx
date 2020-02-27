import React, { Component, Children, cloneElement, memo, useRef, useEffect } from 'react'
import PropsTypes from "prop-types";
import { useFormik } from "formik";
import classnames from 'classnames';
import * as yup from 'yup'

const Form = ({ initialValues, className, onSubmit: onSubmitHandler, children }) => {
	
	const initialFormData = useRef();
	const formValidationSchema = useRef();

	const validationSchema = yup.object().shape({
		email: yup
			.string()
			.email()
			.required()
			.lowercase(),
		password: yup
			.string()
			.required()
			.min(3)
			.max(30)
			.matches('^(?=.*\d).{4,8}$', 'invalid regex')
	})


	const formik = useFormik({
		initialValues,
		onSubmit: onSubmitHandler,
		validationSchema
	})
	return (
		<form
			className={classnames("", className)}
			onSubmit={(e) => {
				e.preventDefault();
				formik.handleSubmit();
			}
			}
		>
			{
				Children.map(children, child => {						
					switch (child.type.name) {
						case 'FormGroup':
						case 'FormArray':
							return cloneElement(child, {
								...child.props,
								value: formik.values[child && child.props && child.props.id] || formik.values[child && child.props && child.props.name],
							})					
						default:
							return cloneElement(child, {
								...child.props,
								onChange: formik.handleChange,
								value: formik.values[child && child.props && child.props.id] || formik.values[child && child.props && child.props.name],
								error: formik.errors[child && child.props && child.props.id] || formik.errors[child && child.props && child.props.name],
								touched: formik.touched[child && child.props && child.props.id] || formik.touched[child && child.props && child.props.name],
								isSubmitting: formik.isSubmitting
							})
					}
				})
			}
		</form>
	)
}

Form.prototype = {
	initialValues: PropsTypes.object.isRequired,
	onSubmitHandler: PropsTypes.func.required,
	className: PropsTypes.string,
	children: PropsTypes.object
}

Form.defaultProps = {
	onSubmitHandler: e => console.log(e),
}

export default Form;