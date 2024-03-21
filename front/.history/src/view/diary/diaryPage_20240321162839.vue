<template>
    <div class="diary">
        <a-card class="detile">
            <a-menu class="nav" mode="horizontal" v-model:selectedKeys="selectedKeys" :items="items"
                @click="handleClick"></a-menu>
            <div class="write" v-if="selectedKeys == 'write'">
                <a-textarea v-model:value="content" placeholder="在此输入您的日记" />
                <a-button type="primary" style="width: 10%;margin-top: 5%;" @click="submit">提交</a-button>
            </div>
            <div class="search" v-else-if="selectedKeys == 'search'">
                <a-textarea v-model:value="searchcontent" placeholder="在此输入您的搜查" />
                <a-date-picker style="width: 10%;margin-top: 2%;" v-model:value="time" />
                <a-button type="primary" style="width: 10%;margin-top: 2%;" @click="search">搜索</a-button>
            </div>
            <div class="display" v-else-if="selectedKeys == 'display'"></div>
        </a-card>
    </div>
</template>

<script setup>
import {getCurrentInstance } from 'vue';
import router from '../../router/index'
const instance = getCurrentInstance();
let searchcontent=ref();
let selectedKeys = ref(['write']);
let time=ref();
let items = [
    {
        key: 'write',
        label: '日记撰写',
        title: '日记撰写',
    },
    {
        key: 'search',
        label: '日记搜索',
        title: '日记搜索',
    },
    {
        key: 'display',
        label: '日记展示',
        title: '日记展示',
    }
];
let content = ref('');
const handleClick = (key) => {
    selectedKeys.values = key.key;
    console.log(selectedKeys.values)
    // 处理菜单项的点击事件
};
const submit = () => {
    instance.appContext.config.globalProperties.$axios.post('/api/endpoint', { data: content.values })
    .then(response => {
      // 处理响应数据
      console.log(response.data);
    })
    .catch(error => {
      // 处理错误
      console.error(error);
    });
};
</script>


<style scoped>
.diary {
    background-image: url('../../assets/diary.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}

.detile {
    width: 90%;
    height: 90%;
    background-color: rgba(255, 255, 255, 0.5);
}

.write {
    margin-top: 5%;
    display: flex;
    flex-direction: column;
    align-items: center;
}
.search{
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>