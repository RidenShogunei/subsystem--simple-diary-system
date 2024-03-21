// router.js

import { createRouter, createWebHistory } from 'vue-router'
import login from '../view/login/loginPage.vue'
import resgister from '../view/login/resgisterPage.vue'
const routes = [
    { path: '/',name:'/', component: login },
    { path: '/resgister',name:'resgister', component: resgister },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router