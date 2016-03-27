import Vue from 'vue'
import App from './App.vue'
import home from './components/home.vue'
import login from './components/login.vue'
import signup from './components/signup.vue'
import secretquote from './components/secretquote.vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import auth from './jwt'
Vue.use(VueRouter)
Vue.use(VueResource)

//vue-resource设置搜权初始值
Vue.http.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('id_token');

// 当app启动时验证用户的登陆状态
auth.checkAuth()

export var router = new VueRouter()
//定义路由规则
router.map ({
	'/home': {
		component: home
	},
	'secretquote': {
		component: secretquote
	},
	'/login': {
		component: login
	},
	'/signup': {
		component: signup
	}
})
//为路由定义全局重定向规则，将任意未匹配路径重定向到/home页面
router.redirect({
	'*': '/home'
})
//路由器会创建一个App实例，并挂载到#app对应的元素上
router.start(App, '#app')

