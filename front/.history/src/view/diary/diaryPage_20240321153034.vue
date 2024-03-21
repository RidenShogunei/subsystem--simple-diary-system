<template>
    <div class="diary">
      <a-card class="detile">
        <a-menu
    id="dddddd"
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    style="width: 256px"
    mode="inline"
    :items="items"
    @click="handleClick"
  ></a-menu>
      </a-card>
    </div>
</template>

<script setup>
import router from '../../router/index'

</script>


<style scoped>
.diary{
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
.detile{
    width: 90%;
    height: 90%;
    background-color: rgba(255, 255, 255, 0.5);
}
</style>