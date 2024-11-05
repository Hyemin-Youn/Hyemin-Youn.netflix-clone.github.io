<template>
    <div>
      <button @click="showLogin = !showLogin">{{ showLogin ? 'Go to Register' : 'Go to Login' }}</button>
      <LoginForm v-if="showLogin" />
      <RegistrationForm v-else />
    </div>
  </template>
  
  <script>
  import LoginForm from './LoginForm.vue';
  import RegistrationForm from './RegistrationForm.vue';
  
  export default {
    components: {
      LoginForm,
      RegistrationForm
    },
    data() {
      return {
        showLogin: true
      };
    }
  };
  </script>
  
  <style scoped>
  /* 추가 스타일이 필요할 경우 여기에 작성 */
  </style>
  