import { createApp} from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import Antd from 'ant-design-vue';
import axios from 'axios';
const instance = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL // 使用环境变量中的base URL
});

// 现在，你可以把这个实例添加到全局配置中
app.config.globalProperties.$axios = instance;
const app = createApp(App);

app.config.globalProperties.$axios = axios; // 全局挂载axios


app
  .use(router)
  .use(store)
  .use(Antd)
  .mount('#app');