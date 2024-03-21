// router.js

import { createRouter, createWebHistory } from 'vue-router'
import login from '../view/login/loginPage.vue'
import register from '../view/login/registerPage.vue'
import diary from '../view/diary/diaryPage.vue'
const routes = [
    { path: '/',name:'/', component: login },
    { path: '/register',name:'register', component: register },
    { path: '/diary',name:'register', component: diary },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router