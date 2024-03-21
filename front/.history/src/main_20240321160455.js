import { createApp, ref, reactive } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import axios from 'axios'
const app = createApp(App);

app.prototype.axios = axios;
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