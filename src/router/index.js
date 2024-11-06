import { createRouter, createWebHistory } from 'vue-router';
import SignIn from '@/views/SignIn.vue';
import SignUp from '@/views/SignUp.vue';
import HomePage from '@/views/Home.vue'; // 이름 변경

const routes = [
  { path: '/', redirect: '/signin' },
  { path: '/signin', name: 'SignIn', component: SignIn },
  { path: '/signup', name: 'SignUp', component: SignUp },
  { path: '/home', name: 'HomePage', component: HomePage } // 이름 변경
];


const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
