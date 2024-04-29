import { createRouter, createWebHistory } from 'vue-router'
import IndexView from "@/IndexView.vue";
import LoginView from "@/views/auth/LoginView.vue"
import RegisterView from "@/views/auth/RegisterView.vue"

const routes = [
  {
    name: 'index',
    path: '/',
    component: IndexView
  },
    {
    name: 'user_login',
    path: '/auth/login/',
    component: LoginView
  },
  {
    name: 'user_register',
    path: '/auth/register/',
    component: RegisterView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
