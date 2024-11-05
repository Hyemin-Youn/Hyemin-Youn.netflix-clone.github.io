<template>
    <div class="login-container">
      <div class="login-form">
        <h2>Sign in</h2>
        <form @submit.prevent="onLogin">
          <input
            type="email"
            v-model="email"
            placeholder="Username or Email"
            required
          />
          <input
            type="password"
            v-model="password"
            placeholder="Password"
            required
          />
          <div class="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#" class="forgot-password">Forgot Password?</a>
          </div>
          <button type="submit">
            <span v-if="!isLoading">Login</span>
            <span v-else class="spinner"></span>
          </button>
          <p class="signup">
            Don't have an account?
            <router-link to="/register" class="signup-link">Sign up</router-link>
          </p>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { useRouter } from 'vue-router';
  import AppwriteService from '@/services/appwrite';
  
  export default {
    setup() {
      const email = ref('');
      const password = ref('');
      const isLoading = ref(false);
      const router = useRouter();
  
      const onLogin = async () => {
        isLoading.value = true;
        try {
          await AppwriteService.login(email.value, password.value);
          router.push('/app');
        } catch (error) {
          alert('Login failed. Please try again.');
        }
        isLoading.value = false;
      };
  
      return { email, password, isLoading, onLogin };
    }
  };
  </script>
  
  <style scoped>
  /* 전체 배경 설정 */
  .login-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    width: 100vw;
    height: 100vh;
    background: url('/bg.png') no-repeat center center;
    background-size: cover;
  }
  .login-container {
  background-color: rgba(0, 0, 0, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  }
  
  /* 로그인 폼 박스 */
  .login-form {
    background: rgba(0, 0, 0, 0.8);
    padding: 2rem;
    border-radius: 8px;
    width: 100%;
    max-width: 400px;
    text-align: center;
    color: white;
  }
  
  h2 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
  
  input[type="email"],
  input[type="password"] {
    width: 100%;
    padding: 0.75rem;
    margin: 0.5rem 0;
    border: none;
    border-radius: 4px;
    background: #333;
    color: #fff;
    font-size: 1rem;
  }
  
  input::placeholder {
    color: #8b8b8b;
  }
  
  .options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
    font-size: 0.875rem;
    color: #b3b3b3;
  }
  
  .options label {
    display: flex;
    align-items: center;
  }
  
  .options input[type="checkbox"] {
    margin-right: 0.5rem;
  }
  
  .forgot-password {
    color: #b3b3b3;
    text-decoration: none;
  }
  
  .forgot-password:hover {
    color: #fff;
  }
  
  button {
    width: 100%;
    padding: 0.75rem;
    background-color: #e50914;
    border: none;
    border-radius: 4px;
    color: white;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  button .spinner {
    width: 1rem;
    height: 1rem;
    border: 2px solid white;
    border-top: 2px solid transparent;
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  
  .signup {
    margin-top: 1.5rem;
    color: #b3b3b3;
  }
  
  .signup-link {
    color: #fff;
    text-decoration: underline;
  }
  .signup-link:hover {
    color: #e50914;
  }
  </style>
  