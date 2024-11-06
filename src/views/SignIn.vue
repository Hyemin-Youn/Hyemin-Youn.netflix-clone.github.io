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
      <p class="signup-link">
        Don't have an account? <router-link to="/signup">Sign up</router-link>
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
            alert("로그인 성공!");
            this.$router.push("/home"); // 로그인 성공 후 홈으로 이동
          },
          (error) => {
            this.errorMessage = error;
          }
        );
      }
    }
  };
  </script>
  
  <style scoped>
  .sign-in {
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
    background-color: #e50914;
    color: white;
    border: none;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #bf0812;
  }
  
  .signup-link {
    margin-top: 15px;
    text-align: center;
  }
  
  .signup-link a {
    color: #e50914;
    text-decoration: none;
    font-weight: bold;
  }
  
  .signup-link a:hover {
    text-decoration: underline;
  }
  
  .error {
    color: red;
    font-size: 0.9rem;
    margin-top: 10px;
  }
  </style>
  