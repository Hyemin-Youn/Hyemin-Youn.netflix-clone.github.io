<template>
    <div class="sign-up">
      <h2>회원가입</h2>
      <form @submit.prevent="handleRegister">
        <label for="email">이메일:</label>
        <input type="email" id="email" v-model="email" required />
  
        <label for="password">비밀번호:</label>
        <input type="password" id="password" v-model="password" required />
  
        <button type="submit">회원가입</button>
      </form>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </template>
  
  <script>
  import { tryRegister } from "@/services/Authentication";
  
  export default {
    name: "SignUp",
    data() {
      return {
        email: "",
        password: "",
        errorMessage: ""
      };
    },
    methods: {
      handleRegister() {
        tryRegister(
          this.email,
          this.password,
          () => {
            alert("회원가입 성공!"); // 회원가입 성공 시 메시지 출력
            this.$router.push("/signin"); // 회원가입 성공 후 로그인 페이지로 이동
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
  