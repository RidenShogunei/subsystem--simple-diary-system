import { createApp, ref } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';

const app = createApp(App);

// 全局导入 ref
app.config.globalProperties.$ref = ref;

app
  .use(router)
  .use(store)
  .use(Antd)
  .mount('#app');