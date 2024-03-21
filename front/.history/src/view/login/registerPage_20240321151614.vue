<template>
    <div class="register">
      <a-card class="detile">
        <div class="title">注册</div>
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
  
          <a-form-item label="Password again" name="passwordAgain"
            :rules="[
              { required: true, message: 'Please input your password again!' },
              { validator: validatePasswordAgain }
            ]">
            <a-input-password v-model:value="formState.passwordAgain" />
          </a-form-item>
  
          <a-form-item :wrapper-col="{ offset: 8, span: 16 }">
            <a-button type="primary" @click="submit">Submit</a-button>
          </a-form-item>
        </a-form>
      </a-card>
    </div>
  </template>
  
  <script setup>
  import router from '../../router/index';
  
  const formState = reactive({
    username: '',
    password: '',
    passwordAgain: ''
  });
  
  const onFinish = values => {
    console.log('Success:', values);
  };
  
  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };
  
  const submit = () => {
    router.push('/diary');
    onFinish(formState);
  };
  
  const validatePasswordAgain = (rule, value, callback) => {
    if (value !== formState.password) {
      callback(new Error('Passwords do not match!'));
    } else {
      callback();
    }
  };
  
  const Register = () => {
    console.log('进入日记');
    router.push('/diary');
    onFinish(formState);
  };
  </script>
  
  <style scoped>
  .register {
    background-image: url('../../assets/register.jpg');
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
    justify-content: center;
  }
  
  .title {
    font-size: 30px;
    text-align: center;
    margin-bottom: 5%;
  }
  </style>