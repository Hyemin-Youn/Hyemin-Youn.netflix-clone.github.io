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
          (user) => {
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
  .sign-up {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
  }
  
  label {
    display: block;
    margin-top: 10px;
  }
  
  input {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: #E50914;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #bf0812;
  }
  
  .error {
    color: red;
    font-size: 0.9rem;
    margin-top: 10px;
  }
  </style>
  