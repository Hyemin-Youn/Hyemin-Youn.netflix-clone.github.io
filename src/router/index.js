import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';
import Home from '@/views/Home.vue';

const routes = [
  { path: '/', redirect: '/signin' }, // 기본 경로를 로그인 페이지로 설정
  { path: '/signin', name: 'SignIn', component: SignIn },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/home', name: 'Home', component: Home } // 로그인 성공 시 이동할 홈 경로
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
