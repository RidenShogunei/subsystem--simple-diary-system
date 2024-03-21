<template>
    <div class="diary">
      
    </div>
</template>

<script setup>
import router from '../../router/index'
const formState = reactive({
    username: '',
    password: '',
    remember: true,
});
const onFinish = values => {
    console.log('Success:', values);
};
const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};

const size = ref(30);

const submit = () => {
    // 在这里执行提交表单的逻辑
    // 可以调用 onFinish 或直接处理表单数据
    onFinish(formState);
};

const Register = () => {
    // 在这里执行注册表单的逻辑
    // 可以调用 onFinish 或直接处理表单数据
    console.log('进入注册页')
    router.push('/register')
    onFinish(formState);
};
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

.detile {
    width: 35%;
    display: flex;
    flex-direction: column;
    background-color: rgba(255, 255, 255, 0.5);
}

.title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 5%;
}
</style>