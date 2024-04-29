<template>
  <section class="vh-100">
    <div class="d-flex align-items-center h-100 gradient-1">
    <div class="container h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="card" style="border-radius: 20px;">
            <div class="card-body p-5">
              <h2 class="text-center mb-5">注册</h2>
              <form @submit.prevent="register">
                <div class="form-outline mb-4">
                  <label class="form-label" for="username">用户名</label>
                  <input v-model="username" type="text" id="username" class="form-control form-control-lg">
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="username">密码</label>
                  <input v-model="password" type="password" id="password" class="form-control form-control-lg">
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label">确认密码</label>
                  <input v-model="password_confirm" type="password" id="password" class="form-control form-control-lg">
                </div>
                <div class="d-flex justify-content-center">
                  <button type="submit" class="btn btn-lg btn-success btn-block gradient-2">注册账号</button>
                </div>
                <div class="error_message">{{ error_message }}</div>
                <p class="text-center text-muted mt-3">已有账号？
                  <router-link :to="{name: 'user_login'}">
                    <u>去登录</u>
                  </router-link>
                </p>
              </form>
            </div>
        </div>
      </div>
    </div>
  </div>
  </section>
</template>

<script>
import { ref } from 'vue'
  export default {
    setup() {
      let username = ref("");
      let password = ref("");
      let password_confirm = ref("");
      let error_message = ref("");

      const register = () => {
        console.log(username.value, password.value, password_confirm.value, error_message.value)
      }

      return {
        username,
        password,
        password_confirm,
        error_message,
        register,
      }
    }
  }
</script>

<style>
  .gradient-1 {
    background-image: linear-gradient(-225deg, #77FFD2 0%, #6297DB 48%, #1EECFF 100%);
  }
  .gradient-2 {
    background-image: linear-gradient(-225deg, #3D4E81 0%, #5753C9 48%, #6E7FF3 100%);
  }
  .error_message {
    color: red;
  }
</style>