// router.js

import { createRouter, createWebHistory } from 'vue-router'
import login from '../view/login/loginPage.vue'
import rigister from '../view/login/loginPage.vue'
const routes = [
    { path: '/',name:'/', component: login },
    { path: '/rigister',name:'rigister', component: rigister },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router