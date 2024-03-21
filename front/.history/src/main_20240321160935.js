import { createApp, ref, reactive } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import axiosPlugin from './axios'
import Vue from 'vue';
Vue.use(axiosPlugin); // 在这里注册你的插件
const app = createApp(App);

// 全局导入 ref
app.config.globalProperties.$ref = ref;
// 全局导入 router
app.config.globalProperties.$router = router;
// 全局导入 reactive
app.config.globalProperties.$reactive = reactive;

app
  .use(router)
  .use(store)
  .use(Antd)
  .mount('#app');