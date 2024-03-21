// router.js

import { createRouter, createWebHistory } from 'vue-router'
import login from '../view/login/loginPage.vue'
import register from '../view/login/registerPage.vue'
const routes = [
    { path: '/',name:'/', component: login },
    { path: '/register',name:'register', component: register },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router