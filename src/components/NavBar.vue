<template>
  <div class="wrapper">
    <div class="container d-flex justify-content-center">
      <div class="title">
        <div class="title-info">
          A Blog with Markdown
          developed by Li
        </div>
        <div class="my-button" v-if="!$store.state.user.is_login">
          <router-link :to="{name: 'user_login'}">
            <button type="button" class="btn btn-lg btn-primary-outline">登录</button>
          </router-link>
          <router-link :to="{name: 'user_register'}">
            <button type="button" class="btn btn-lg btn-primary-outline">注册</button>
          </router-link>
        </div>
        <div class="my-button" v-else>
          <router-link :to="{name: 'index'}">
            <button type="button" class="btn btn-lg btn-primary-outline" @click="logout">登出</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
export default {
  setup() {
    let store = useStore();
    console.log(store.state.user.is_login);

    const logout = () => {
      store.dispatch("logout");
    }

    return {
      logout,
    }
  }
}
</script>

<style>
  .wrapper{
    background-image: linear-gradient(-225deg, #69EACB 0%, #EACCF8 48%, #6654F1 100%);
  }

  .title {
    margin-top: 3vh;
    text-align: center;
    font-style: italic;
    font-size: 2vh;
    color: #6654F1;
    font-family: 微软雅黑, serif;
    font-weight: bolder;
  }

  .my-button {
    display: flex;
    justify-content: flex-end;
  }
  .my-button button {
    margin-right: 30px;
  }

  .title-info {
    padding: 1vh;
    text-align: center;
    font-size: 3vh;
  }

  .btn-primary-outline {
    background-color: transparent;
    border-color: #7161ef;
    color: #6d64be;
  }

  .btn-primary-outline:hover {
    color: white;
    border-color: #290fe1;
    transition-duration: 200ms;
  }
</style>