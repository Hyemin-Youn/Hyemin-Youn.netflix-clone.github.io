<template>
  <div class="wrapper">
    <div class="card-container">
      <!-- 로그인 화면 -->
      <div class="card" :class="{ animated: isAnimating, hidden: isFlipped }">
        <h2>Login</h2>
        <form @submit.prevent="handleLogin">
          <label for="email">Email</label>
          <input type="email" v-model="email" required />

          <label for="password">Password</label>
          <input type="password" v-model="password" required />

          <div class="remember-me">
            <input type="checkbox" id="rememberMe" v-model="rememberMe" />
            <label for="rememberMe">Remember Me</label>
          </div>

          <button type="submit">Sign In</button>
          <p class="forgot-password" @click="handleForgotPassword">Forgot Password?</p>
        </form>
        <p class="switch" @click="startSwapAnimation">Don't have an account? Sign up</p>
      </div>

      <!-- 회원가입 화면 -->
      <div class="card" :class="{ animated: isAnimating, hidden: !isFlipped }">
        <h2>Sign Up</h2>
        <form @submit.prevent="handleRegister">
          <label for="newEmail">Email</label>
          <input type="email" v-model="newEmail" required />

          <label for="newPassword">Password</label>
          <input type="password" v-model="newPassword" required />

          <label for="confirmPassword">Confirm Password</label>
          <input type="password" v-model="confirmPassword" required />

          <div class="terms">
            <input type="checkbox" id="terms" v-model="termsAccepted" />
            <label for="terms">I have read and agree to the Terms and Conditions</label>
          </div>

          <button type="submit" :disabled="!termsAccepted">Register</button>
          <p v-if="passwordError" class="error">{{ passwordError }}</p>
        </form>
        <p class="switch" @click="startSwapAnimation">Already have an account? Sign in</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFlipped: false,
      isAnimating: false,
      email: "",
      password: "",
      rememberMe: false,
      newEmail: "",
      newPassword: "",
      confirmPassword: "",
      termsAccepted: false,
      passwordError: "",
    };
  },
  mounted() {
    // 페이지 로드 시, 로컬 스토리지에서 사용자 정보 불러오기
    const savedEmail = localStorage.getItem("email");
    const savedPassword = localStorage.getItem("password");
    const rememberMe = localStorage.getItem("rememberMe") === "true";
    if (rememberMe && savedEmail && savedPassword) {
      this.email = savedEmail;
      this.password = savedPassword;
      this.rememberMe = rememberMe;
      this.autoLogin();
    }
  },
  methods: {
    startSwapAnimation() {
      this.isAnimating = true;
      setTimeout(() => {
        this.isFlipped = !this.isFlipped;
        this.isAnimating = false;
      }, 2000);
    },
    handleLogin() {
      if (this.email && this.password) {
        alert("Login successful!");
        if (this.rememberMe) {
          // 로컬 스토리지에 이메일, 비밀번호 저장
          localStorage.setItem("email", this.email);
          localStorage.setItem("password", this.password);
          localStorage.setItem("rememberMe", this.rememberMe);
        } else {
          // Remember Me 체크가 해제된 경우 정보 삭제
          localStorage.removeItem("email");
          localStorage.removeItem("password");
          localStorage.removeItem("rememberMe");
        }
        this.$router.push("/home"); // 로그인 성공 후 홈으로 이동
      } else {
        alert("Login failed. Please try again.");
      }
    },
    handleRegister() {
      if (this.newPassword !== this.confirmPassword) {
        this.passwordError = "Passwords do not match.";
        return;
      } else {
        this.passwordError = "";
      }

      if (this.newEmail && this.newPassword && this.termsAccepted) {
        alert("Registration successful!");
        this.isFlipped = false;
      } else {
        alert("Registration failed. Please check your inputs.");
      }
    },
    handleForgotPassword() {
      alert("Redirecting to Forgot Password page...");
    },
    autoLogin() {
      // 자동 로그인 로직 (이메일과 비밀번호가 유효하다고 가정)
      this.$router.push("/home");
    },
  },
};
</script>

<style scoped>
/* 기본 스타일 */
.wrapper {
  height: 460px;
  width: 320px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  perspective: 1000px;
  backdrop-filter: blur(5px);
}

.card-container {
  position: relative;
  width: 100%;
  height: 100%;
}

.card {
  position: absolute;
  width: 100%;
  height: 100%;
  padding: 40px 20px;
  text-align: center;
  background: #e50914;
  color: #fff;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  transition: transform 2s ease, opacity 2s ease;
  backface-visibility: hidden;
}

.hidden {
  opacity: 0;
}

.card.animated {
  animation: swapEffect 2s ease forwards;
}

@keyframes swapEffect {
  0% {
    transform: translateX(0) rotateY(0);
    opacity: 1;
  }
  50% {
    transform: translateX(-100%) rotateY(-180deg) scale(0.8);
    opacity: 0.5;
  }
  100% {
    transform: translateX(0) rotateY(-360deg);
    opacity: 1;
  }
}

h2 {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-top: 10px;
}

input[type="email"],
input[type="password"] {
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

button:disabled {
  background-color: #aaa;
  cursor: not-allowed;
}

.terms,
.remember-me {
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 10px 0;
}

.terms input[type="checkbox"],
.remember-me input[type="checkbox"] {
  margin-right: 5px;
}

.switch {
  margin-top: 15px;
  color: #fff;
  cursor: pointer;
  text-decoration: underline;
}

.forgot-password {
  margin-top: 10px;
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
