import { createApp, ref, reactive } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import axios from 'axios';

const app = createApp(App);

app.config.globalProperties.$axios = axios; // 全局挂载axios


app
  .use(router)
  .use(store)
  .use(Antd)
  .mount('#app');