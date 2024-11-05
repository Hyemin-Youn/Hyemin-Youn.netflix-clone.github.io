<template>
    <div class="wrapper">
      <div class="card login-size">
        <h2>Login</h2>
        <form @submit.prevent="onLogin">
          <div class="form-group">
            <input type="email" v-model="email" placeholder="Email" required />
          </div>
          <div class="form-group">
            <input type="password" v-model="password" placeholder="Password" required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: '',
      };
    },
    methods: {
      onLogin() {
        // 로그인 로직 추가
        console.log("Logging in with", this.email, this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Login 스타일 적용 */
  .wrapper {
    height: 430px;
    width: 320px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    perspective: 1000px;
    backdrop-filter: blur(5px);
  }
  .card.login-size {
    height: 340px;
  }
  .card {
    position: absolute;
    width: 100%;
    height: 100%;
    padding: 40px 20px;
    text-align: center;
    background: rgba(212, 0, 255, 0.26);
    color: #fff;
    border-radius: 10px;
    transition: all 0.5s ease-in-out;
    backface-visibility: hidden;
    border: 1px solid #40175815;
  }
  </style>
  