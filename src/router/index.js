import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import LoginSignUp from '@/views/LoginSignUp.vue'; // 통합된 로그인/회원가입 컴포넌트

const routes = [
  {
    path: '/',
    redirect: '/signin', // 기본 경로로 접속 시 /signin으로 리다이렉트
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: LoginSignUp, // 로그인/회원가입 컴포넌트
  },
  {
    path: '/signup',
    name: 'SignUp',
    component: LoginSignUp, // 동일 컴포넌트 사용
  },
  {
    path: '/home',
    name: 'Home',
    component: Home, // 홈 컴포넌트
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
