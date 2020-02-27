import store from '../store'
import { HIDE_LOADER, SHOW_LOADER } from "./types";
export default (function (params) {	
	const _showLoader = () => {
		store.dispatch({type: SHOW_LOADER});
	}
	const _hideLoader = () => {
		store.dispatch({type: HIDE_LOADER});
	}

	return {
		showLoader : _showLoader,
		hideLoader: _hideLoader
	}
})();