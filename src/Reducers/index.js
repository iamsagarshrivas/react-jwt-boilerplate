import { combineReducers } from "redux";
import LoaderReducer from './loaderReducer'

export default combineReducers({
	loader: LoaderReducer
})