<template>
  <div class="col-sm-6 sol-sm-offset-3">
    <h1>点击下面获得秘密提示</h1>
    <button class="btn btn-warning" @click="getQuote()">获得提示</button>
    <div class="quote-area" v-if="quote">
      <h2><blockquote>{{ quote }}</blockquote></h2>
    </div>
  </div>
</template>

<script>
import auth from '../jwt'
export default {
  data() {
    return {
      quote: ''
    }
  },
  methods: {
    getQuote() {
      /*this.$http
        .get('http://localhost:3001/api/protected/random-quote', (data) => {
          this.quote = data;
        }, { 
          headers: auth.getAuthHeader()
        })
        .error((err) => console.log(err))*/
        this.quote = '恭喜你！你已完整地体验将本app的功能！'
    }
  },
  route: {
    canActivate() {
      return auth.user.authenticated
    }
  }
}
</script>
