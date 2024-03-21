<template>
    <div class="diary">
        <a-card class="detile">
            <a-menu class="nav" mode="horizontal"  v-model:selectedKeys="selectedKeys"
                :items="items" @click="handleClick"></a-menu>
        </a-card>
    </div>
</template>

<script setup>
import router from '../../router/index'
const openKeys = ref([]);
const selectedKeys = ref(['write']);
const items = [
    {
        key: 'write',
        title: '日记撰写',
        icon: 'edit' // 假设有一个名为'edit'的图标
    },
    {
        key: 'search',
        title: '日记搜索',
        icon: 'search' // 假设有一个名为'search'的图标
    },
    {
        key: 'display',
        title: '日记展示',
        icon: 'display' // 假设有一个名为'display'的图标
    }
];

const handleClick = (key) => {
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
</style>