<template>
    <div class="login">
        <a-card class="detile">
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
                    <a-button type="primary" html-type="submit">Submit</a-button>
                </a-form-item>
            </a-form>
        </a-card>
    </div>
</template>

<script setup>
import { reactive } from 'vue';
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
</script>

<style scoped>
.login {
    background-image: url('../../assets/login.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    position: fixed;
    display: flex;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
}
.detile{
    width: 35%;

}
</style>