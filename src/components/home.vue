<template>
  <div class="col-sm-6 col-sm-offset-3">
    <h1>Hello！请点击按钮获取更多提示</h1>
    <button class="btn btn-primary" @click="getQuote()">获取提示</button>
    <div class="quote-area" v-if="quote">
      <h2><blockquote> {{ quote }}</blockquote></h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      quote: ''
    }
  },
  methods: {
    getQuote() {
      /*this.$http
        .get('http://localhost:3001/api/random-quote', (data) => {
          this.quote = data;
        })
        .error((err) => console.log(err))*/
        this.quote = '您可以直接登陆或进行注册，登陆后获得更多功能。'
    }
  }
}
</script>
