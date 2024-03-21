import axios from 'axios';
import App from './App.vue';
function axiosPlugin() {
    // 返回一个对象，该对象包含一个install方法
    return {
        install(App ) {
            // 添加axios到Vue原型上，这样你可以在任何组件中使用它
            App .prototype.$http = axios;
        }
    };
}
