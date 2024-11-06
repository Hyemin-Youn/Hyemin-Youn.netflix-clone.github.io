import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import LoginSignUp from '@/views/LoginSignUp.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginSignUp
  },
  {
    path: '/signup',
    name: 'Signup',
    component: LoginSignUp
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
