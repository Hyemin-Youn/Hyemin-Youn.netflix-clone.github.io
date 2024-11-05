<template>
    <div class="wrapper">
      <div class="card registration-size">
        <h2>Register</h2>
        <form @submit.prevent="onRegister">
          <div class="form-group">
            <input type="text" v-model="username" placeholder="Username" required />
          </div>
          <div class="form-group">
            <input type="email" v-model="email" placeholder="Email" required />
          </div>
          <div class="form-group">
            <input type="password" v-model="password" placeholder="Password" required />
          </div>
          <button type="submit">Register</button>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        username: '',
        email: '',
        password: '',
      };
    },
    methods: {
      onRegister() {
        // 회원가입 로직 추가
        console.log("Registering with", this.username, this.email, this.password);
      }
    }
  };
  </script>
  
  <style scoped>
  /* Registration 스타일 적용 */
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
  .card.registration-size {
    height: 430px;
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
  