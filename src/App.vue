<!-- App.vue -->
<template>
  <div id="app">
    <AuthForm /> <!-- AuthForm을 메인 컴포넌트로 추가 -->
  </div>
</template>

<script>
import AuthForm from './components/AuthForm.vue';

export default {
  components: {
    AuthForm,
  },
};
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  margin-top 60px
</style>
