<template>
  <div class="wrapper">
    <div class="card" :class="{ flipped: isFlipped }">
      <!-- 로그인 화면 -->
      <div class="content front">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
          <label for="email">Email</label>
          <input type="email" v-model="email" required />

          <label for="password">Password</label>
          <input type="password" v-model="password" required />

          <button type="submit">Sign In</button>
        </form>
        <p class="switch" @click="flipCard">Don't have an account? Sign up</p>
      </div>

      <!-- 회원가입 화면 -->
      <div class="content back">
        <h2>Sign Up</h2>
        <form @submit.prevent="handleRegister">
          <label for="newEmail">Email</label>
          <input type="email" v-model="newEmail" required />

          <label for="newPassword">Password</label>
          <input type="password" v-model="newPassword" required />

          <button type="submit">Register</button>
        </form>
        <p class="switch" @click="flipCard">Already have an account? Sign in</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlipped: false,
      email: "",
      password: "",
      newEmail: "",
      newPassword: "",
    };
  },
  methods: {
    flipCard() {
      this.isFlipped = !this.isFlipped;
    },
    handleLogin() {
      // 로그인 로직 처리 (예: API 호출)
      if (this.email && this.password) {
        alert("Login successful!");
        this.$router.push("/home"); // 로그인 성공 후 홈 페이지로 이동
      } else {
        alert("Login failed. Please try again.");
      }
    },
    handleRegister() {
      // 회원가입 로직 처리 (예: API 호출)
      if (this.newEmail && this.newPassword) {
        alert("Registration successful!");
        this.isFlipped = false; // 회원가입 성공 후 로그인 화면으로 전환
      } else {
        alert("Registration failed. Please try again.");
      }
    },
  },
};
</script>

<style scoped>
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

.card {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease-in-out;
}

.card.flipped {
  transform: rotateY(180deg);
}

.content {
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
  border: 1px solid rgba(255, 255, 255, 0.15);
}

.front {
  background: #e50914;
}

.back {
  background: #e50914;
  transform: rotateY(180deg);
}

h2 {
  margin-bottom: 20px;
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
  border: none;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #bf0812;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
}

.switch {
  margin-top: 15px;
  color: #fff;
  cursor: pointer;
  text-decoration: underline;
}

.error {
  color: red;
  font-size: 0.9rem;
  margin-top: 10px;
}
</style>
