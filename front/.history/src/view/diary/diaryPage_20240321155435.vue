<template>
    <div class="diary">
        <a-card class="detile">
            <a-menu class="nav" mode="horizontal" v-model:selectedKeys="selectedKeys" :items="items"
                @click="handleClick"></a-menu>
            <div class="write" v-if="selectedKeys == 'write'">
                <a-textarea v-model:value="content"
                    placeholder="在此输入您的日记" />
            </div>
            <div class="search" v-else-if="selectedKeys == 'search'"></div>
            <div class="display" v-else-if="selectedKeys == 'display'"></div>
        </a-card>
    </div>
</template>

<script setup>
import router from '../../router/index'
let selectedKeys = ref(['write']);
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
let content = ref ('');
const handleClick = (key) => {
    selectedKeys.values = key.key;
    console.log(selectedKeys.values)
    // 处理菜单项的点击事件
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

.write{
    margin-top: 5%;
    height: 80%;
}
</style>