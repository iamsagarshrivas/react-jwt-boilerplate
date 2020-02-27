import React, { Children, cloneElement } from 'react';

export default function FormGroup(props) {
	const { formik } = props;
	return (
		Children.map(props.children, child => {
			console.log('child ----> ', child, child.type.name);

			return cloneElement(
				child, {
				...child.props,
				name: `${props.name}.${child.props}`,
				onChange: () => {console.log(child)}, //formik.handleChange,
				value: formik.values[child && child.props && child.props.id] || formik.values[child && child.props && child.props.name],
				error: formik.errors[child && child.props && child.props.id] || formik.errors[child && child.props && child.props.name],
				touched: formik.touched[child && child.props && child.props.id] || formik.touched[child && child.props && child.props.name],
				isSubmitting: formik.isSubmitting
			}
			);
		}
		)
	)
}