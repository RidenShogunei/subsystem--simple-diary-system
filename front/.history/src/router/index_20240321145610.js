// router.js

import { createRouter, createWebHistory } from 'vue-router'
import login from '../view/login/loginPage.vue'
import resgiter from '../view/login/resgiterPage.vue'
const routes = [
    { path: '/',name:'/', component: login },
    { path: '/resgiter',name:'resgiter', component: resgiter },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router