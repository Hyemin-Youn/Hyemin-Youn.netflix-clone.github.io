<template>
    <div class="sign-in">
      <h2>로그인</h2>
      <form @submit.prevent="handleLogin">
        <label for="email">이메일:</label>
        <input type="email" id="email" v-model="email" required />
  
        <label for="password">비밀번호:</label>
        <input type="password" id="password" v-model="password" required />
  
        <button type="submit">로그인</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
      <p>
        Don't have an account?
        <router-link to="/signup">Sign up</router-link>
      </p>
    </div>
  </template>
  
  <script>
  import { tryLogin } from "@/services/Authentication";
  
  export default {
    name: "SignIn",
    data() {
      return {
        email: "",
        password: "",
        errorMessage: ""
      };
    },
    methods: {
      handleLogin() {
        tryLogin(
          this.email,
          this.password,
          () => {
            alert("로그인 성공!"); // 로그인 성공 시 메시지 출력
            this.$router.push("/home"); // 로그인 성공 후 홈 페이지로 이동
          },
          (error) => {
            this.errorMessage = error; // 에러 메시지 표시
          }
        );
      }
    }
  };
  </script>
  
  <style scoped>
  /* 스타일은 생략 */
  </style>
  