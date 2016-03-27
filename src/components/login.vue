<template>
  <div class="col-sm-4 sol-sm-offset-4">
  	<h2>登陆</h2>
  	<p>登陆以获得更多功能</p>
  	<div class="alert alert-danger" v-if="error">
  		<p>{{ error }}</p>
  	</div>
  	<div class="form-group">
  		<input type="text" class="form-control" v-model="credentials.username" placeholder="请输入用户名">
  	</div>
  	<div class="form-group">
  		<input type="password" class="form-control" v-model="credentials.password" placeholder="请输入用户名">
  	</div>
  	<button class="btn btn-primary" @click="submit()">登陆</button>
  </div>
</template>

<script>
import auth from '../jwt'
export default {
	data() {
		return {
			credentials: {
				username: '',
				password: ''
			},
			error: ''
		}
	},
	methods: {
		submit() {
			var credentials = {
				username: this.credentials.username,
				password: this.credentials.password
			}
			auth.login(this, credentials, 'secretquote')
		}
	}
}
</script>
