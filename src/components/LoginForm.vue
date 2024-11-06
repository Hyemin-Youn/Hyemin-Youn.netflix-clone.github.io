<template>
  <div class="login-container" @mouseover="hover = true" @mouseleave="hover = false">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="input-group" v-for="(input, index) in inputs" :key="index">
        <input
          :type="input.type"
          v-model="input.value"
          required
        />
        <label :class="{ active: input.value !== '' }">{{ input.label }}</label>
      </div>
      <button type="submit" class="btn">Sign In</button>
      <p>Don't have an account? <a href="#">Sign up</a></p>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hover: false,
      inputs: [
        { label: "Username", type: "text", value: "" },
        { label: "Password", type: "password", value: "" },
      ],
    };
  },
  methods: {
    login() {
      alert("Logging in...");
      // 실제 로그인 로직을 구현할 수 있습니다.
    },
  },
};
</script>

<style scoped>
* {
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f7f7f7;
}

.login-container {
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  width: 320px;
  text-align: center;
  transition: transform 0.3s ease-in-out;
  transform: scale(1);
}

.login-container:hover {
  transform: scale(1.05);
}

h2 {
  margin-bottom: 20px;
  color: #333;
}

.input-group {
  margin-bottom: 15px;
  position: relative;
}

.input-group label {
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
  color: #aaa;
  font-size: 14px;
  pointer-events: none;
  transition: 0.2s;
}

.input-group input {
  width: 100%;
  padding: 10px 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.2s;
}

.input-group input:focus {
  border-color: #3f51b5;
}

.input-group label.active {
  top: -8px;
  font-size: 12px;
  color: #3f51b5;
}

.btn {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  background-color: #3f51b5;
  color: #fff;
  cursor: pointer;
  transition: background-color 0.3s;
}

.btn:hover {
  background-color: #2c3a9e;
}

p {
  margin-top: 20px;
  font-size: 14px;
  color: #777;
}

a {
  color: #3f51b5;
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: #2c3a9e;
}
</style>
