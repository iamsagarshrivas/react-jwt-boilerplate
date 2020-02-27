import React from 'react';
import { Router, Switch, Redirect } from 'react-router-dom'
import routes from './routing/Route'
import RouteWithSubRoute from './routing/RoutesWithSubRoutes'
import Loader from "./shared/components/Loader";
import history from "./shared/services/history";
import { Provider } from "react-redux";
import store from './store'

function App() {
	return (
		<div className="App">
			<Provider store={store}>
				<Router history={history}>
					<Switch >
						{routes.map((route, i) => (
							<RouteWithSubRoute key={i} {...route} />
						))}
						<Redirect from='/' to='/auth/login' />
					</Switch>
				</Router>
				<Loader />
			</Provider>
		</div >
	);
}

export default App;
