import axios from 'axios'
import jwtHelper from '../shared/services/jwtHelper'
import history from "../shared/services/history";
import { LocalStorageService } from '../shared/services/localstorage.service';
import LoaderService from '../Actions/loaderAction'
const remote = "http://localhost:9001/api"

axios.interceptors.request.use(
	config => {
		LoaderService.showLoader()
		requestTokenHandler(config);
		requestAPIPrefixHandler(config);
		requestAuthorizationHandler(config);
		return config
	},
	error => {
		LoaderService.hideLoader();
		Promise.reject(error)
	}
)

axios.interceptors.response.use(
	response => {
		LoaderService.hideLoader()
		console.log('response', response);
		responseLoaderHandler(response);
		responseTokenHandler(response);
		responseErrorHandler(response);
	},
	error => {
		LoaderService.hideLoader();
		console.error('response:',error)
	}
)

const requestTokenHandler = (config) => {
	if ( jwtHelper.getToken() && jwtHelper.isTokenExpired) {
		jwtHelper.logout();
		history.push('/');
	}

}

const requestAPIPrefixHandler = (config) => {
	return config['url'] = remote + config.url;
}

const requestAuthorizationHandler = (config) => {
	const token = jwtHelper.getToken();
	if (token) {
		config.headers['Authorization'] = `Bearer ${token}`
	}
	config.headers['Content-type'] = 'application/json'
	return config
}

const responseLoaderHandler = (response) => {
	if ([401, 403].includes(response.status)) {
		jwtHelper.clearToken();
		history.push('/')
	}
}

const responseTokenHandler = (response) => {
	if(!response.data.error && response.data.token){
		LocalStorageService.setToken(response.data.token);
	}
}

const responseErrorHandler = (response) => {

}


export const get = async (url) => {
	return await axios.get(url)//remote + url);
}
export const post = async (url, data) => {
	return await axios.post(url, data);
}	
