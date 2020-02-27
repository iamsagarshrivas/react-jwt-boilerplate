import React from 'react'
import classes from  './Loader.module.css'
import { connect, useSelector } from 'react-redux'
// import {showLoader, hideLoader} from '../../Actions/loaderAction'

function Loader(props) {	
	const hidden = useSelector(state => state.loader)
	
	return (
		hidden ? <></> : <div className="overlay_loader">
			<div className="overlay_inner_loader">
				<div className="overlay_content_loader"><span className="spinner_loader"></span></div>
			</div>
		</div>
	)
}
export default connect(null, {})(Loader)