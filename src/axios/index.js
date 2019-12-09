import axios from 'axios'
import jwtHelper from '../shared/services/jwtHelper'
import { createHashHistory } from "history";
const remote = "http://localhost:9001/api"

const history = createHashHistory();



axios.interceptors.request.use(
	config => {
		console.log('config', config);
		
		if(jwtHelper.isTokenExpired){
			jwtHelper.logout();
			// redirect to basic route
			history.push('/')
			
		}
		const token = jwtHelper.getToken();		
		if(token) {
			config.headers['Authorization'] = `Bearer ${token}`
		}		
		config.headers['Content-type'] = 'application/json'
		return config
	},
	error => {
		Promise.reject(error)
	}
)

axios.interceptors.response.use(
	response =>{
		console.log('response', response)

		if([401,403].includes(response.status)){
			jwtHelper.clearToken();
			// navigate to login
			history.push('/')

		}
	}, 
	error => {
		console.log(error)
	}
)

const requestTokenHandler = () => {
	
}

const requestAPIPrefixHandler = () => {
	
}

const requestAuthorizationHandler = () => {
	
}

const responseLoaderHandler = () => {
	
}

const responseTokenHandler = () => {
	
}

const responseErrorHandler = () => {
	
}



export const get = async (url) => {
	return await axios.get(remote + url);
}
export const post = async (url, data) => {
	return await axios.post(remote + url, data);
}	
