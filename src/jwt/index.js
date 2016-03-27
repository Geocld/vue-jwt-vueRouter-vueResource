import {router} from '../main'

const API_URL = 'http://localhost:3001/'
const LOGIN_URL = API_URL + 'sessions/create/'
const SIGNUP_URL = API_URL + 'users/'

export default {
	user: {
		authenticated: false
	},

	login(context, creds, redirect) {
		context.$http.post(LOGIN_URL, creds, (data) => {
			localStorage.setItem('id_token', data.id_token)
			this.user.authenticated = true

			if (redirect) {
				router.go(redirect)
			}
		}).error((err) => {
			//context.error = err
			context.error = '用户不存在或密码不正确!'
		})
	},

	signup(context, creds, redirect) {
		context.$http.post(SIGNUP_URL, creds, (data) => {
			localStorage.setItem('id_token', data.id_token)
			this.user.authenticated = true
			if (redirect) {
				router.go(redirect)
			}
		}).error((err) => {
			//context.error = err
			context.error = '用户名已注册'
		})
	},

	logout() {
		localStorage.removeItem('id_token')
		this.user.authenticated = false
	},

	checkAuth() {
		var jwt = localStorage.getItem('id_token')
		if (jwt) {
			this.user.authenticated = true
		}
		else {
			this.user.authenticated = false
		}
	},

	getAuthHeader() {
		return {
			'Authorization': 'Bearer ' + localStorage.getItem('id_token')
		}
	}
}