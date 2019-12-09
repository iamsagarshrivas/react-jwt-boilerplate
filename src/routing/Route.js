import {Login, Auth, Signup, ForgetPass} from '../components/auth'
import { Layout } from '../components/layout'
import { Private, Public } from '../components/app'
const routes = [
	{
		path: '/auth',
		component: Auth,
		routes:[
			{
				path: '/auth/login',
				component: Login
			},
			{
				path: '/auth/signup',
				component: Signup
			},
			{
				path: '/auth/forget-password',
				component: ForgetPass
			}
		]
	},
	{
		path: '/app',
		component: Layout,
		routes: [
			{
				path: '/app/private',
				component: Private
			},
			{
				path: '/app/public',
				component: Public
			}
			
		]
	}
]

export default routes