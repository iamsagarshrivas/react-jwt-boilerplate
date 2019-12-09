import React from 'react'
function Loader(props) {
	return (
		props.loading ? <div className="loader">
			aa
		</div> : <></>
	)
}
export default Loader