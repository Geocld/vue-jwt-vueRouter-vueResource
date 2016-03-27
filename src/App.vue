<template>
  <nav class="navBar navBar-default">
    <div class="container">
      <ul class="nav navbar-nav">
        <li><a v-link="'home'">首页</a></li>
        <li><a v-link="'login'" v-if="!user.authenticated">登陆</a></li>
        <li><a v-link="'signup'" v-if="!user.authenticated">注册</a></li>
        <li><a v-link="'secretquote'" v-if="user.authenticated">秘密空间</a></li>
        <li><a v-link="'login'" v-if="user.authenticated" @click="logout()">登出</a></li>
      </ul>
    </div>
  </nav>
  <div class="container">
    <!-- 路由外链 -->
    <router-view></router-view>
  </div>
</template>

<script>
import auth from './jwt'
export default {
  data () {
    return {
      user: auth.user
    }
  },
  methods: {
    logout() {
      auth.logout()
    }
  }
}
</script>

