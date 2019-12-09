import decode from 'jwt-decode'
import { LocalStorageService } from "./localstorage.service";

// export default class JWTHelper{
// }

export default (function (params) {

	const loggedIn = () => {

	}

	const isTokenExpired = () => {
		try {
			var payload = decode(LocalStorageService.getToken())
			return payload.exp < Date.now()/1000
		} catch (error) {
			return true
		}
	}

	const setToken = (token) => {
		LocalStorageService.setToken(token);
	}

	const getToken = () => {
		LocalStorageService.getToken();
	}

	const logout = () => {
		LocalStorageService.clearToken()
	}

	return {
		loggedIn: loggedIn,
		isTokenExpired: isTokenExpired,
		setToken: setToken,
		getToken: getToken,
		logout: logout
	}

})();