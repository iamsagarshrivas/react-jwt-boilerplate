import React from 'react';
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import routes from './routing/Route'
import RouteWithSubRoute from './routing/RoutesWithSubRoutes'
import Loader from "./shared/components/Loader";
import history from "./shared/services/history";

function App() {
	return (
		<div className="App" style={{height:""}}>
			<Router history={history}>
				<Switch >
					{routes.map((route,i)=>(
						<RouteWithSubRoute key={i} {...route} />
					))}
					{
						// check if already logged in
						// otherwise go to login
					}
					<Redirect from='/' to='/auth/login' />
				</Switch>
			</Router>
			<div id="overlay">
				<Loader loading={false}/>
			</div>
		</div>
	);
}

export default App;
