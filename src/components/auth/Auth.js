import React from 'react'
import { Switch, Redirect } from 'react-router-dom'
import RoutesWithSubRoutes from '../../routing/RoutesWithSubRoutes'

function Auth({ routes }) {
	return (
		<>
			<div className="navbar navbar-light bg-light shadow-sm border-0">
				<a style={{color:"#39ace7"}} className="navbar-brand" href="#">Logo</a>
			</div>
			<Switch>
				{routes.map((route, i) => (
					<RoutesWithSubRoutes key={i} {...route} />
				))}
				<Redirect from='/auth' to='/auth/login' />
			</Switch>
		</>
	)
}

export default Auth
