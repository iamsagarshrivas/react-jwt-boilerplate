import { createStore, applyMiddleware, compose } from 'redux';
import thunk from "redux-thunk";
import logger from 'redux-logger'
import rootReducer from './Reducers'

const initiateState = {};
const middleware = [thunk, logger]

const store = createStore(
	rootReducer,
	initiateState,
	compose(
		applyMiddleware(...middleware),
		window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__( )))
export default store