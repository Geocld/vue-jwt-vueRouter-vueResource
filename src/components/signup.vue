<template>
  <div class="col-sm-4 sol-sm-offset-4">
    <h2>注册</h2>
    <p>您可以免费注册属于自己的账号。</p>
    <div class="alert alert-danger" v-if="error">
      <p>{{ error }}</p>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" v-model="credentials.username" placeholder="请输入用户名">
    </div>
    <div class="form-group">
      <input type="password" class="form-control" v-model="credentials.password" placeholder="请输入用户名">
    </div>
    <button class="btn btn-primary" @click="submit()">注册</button>
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
      auth.signup(this, credentials, 'secretquote')
    }
  }
}
</script>
