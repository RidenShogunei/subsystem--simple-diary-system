import axios from 'axios';
import Vue from 'vue';
function axiosPlugin() {
    // 返回一个对象，该对象包含一个install方法
    return {
        install(Vue) {
            // 添加axios到Vue原型上，这样你可以在任何组件中使用它
            Vue.prototype.$http = axios;
        }
    };
}