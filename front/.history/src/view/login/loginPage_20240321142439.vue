<template>
    <div class="login">
        <a-card class="detile">
            <div class="title">登录</div>
            <a-form :model="formState" name="basic" :label-col="{ span: 8 }" :wrapper-col="{ span: 16 }"
                autocomplete="off" @finish="onFinish" @finishFailed="onFinishFailed">
                <a-form-item label="Username" name="username"
                    :rules="[{ required: true, message: 'Please input your username!' }]">
                    <a-input v-model:value="formState.username" />
                </a-form-item>

                <a-form-item label="Password" name="password"
                    :rules="[{ required: true, message: 'Please input your password!' }]">
                    <a-input-password v-model:value="formState.password" />
                </a-form-item>

                <a-form-item name="remember" :wrapper-col="{ offset: 8, span: 16 }">
                    <a-checkbox v-model:checked="formState.remember">Remember me</a-checkbox>
                </a-form-item>

                <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
                    <a-space :size="size">
                        <a-button type="primary" @click="submit">Submit</a-button>
                        <a-button @click="Register">Register</a-button>
                    </a-space>
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>

<script setup>
import { reactive, ref } from 'vue';
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
    this.$router.push('/register')
    onFinish(formState);
};
</script>


<style scoped>
.login {
    background-image: url('../../assets/login.jpg');
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