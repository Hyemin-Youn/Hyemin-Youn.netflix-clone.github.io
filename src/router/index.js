import { createRouter, createWebHistory } from 'vue-router';
import Login from '../views/Login.vue';

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory('/Hyemin-Youn.netflix-clone/'), // 여기에 GitHub Pages 레포지토리 이름 추가
  routes,
});

export default router;
