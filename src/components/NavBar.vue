<template>
  <div class="wrapper">
    <div class="container d-flex justify-content-center">
      <div class="title" v-if="!$store.state.user.is_login">
        <div class="title-info">
          A Blog with Markdown
          developed by Li
        </div>
        <div class="my-button">
          <router-link :to="{name: 'user_login'}">
            <button type="button" class="btn btn-lg btn-primary-outline">登录</button>
          </router-link>
          <router-link :to="{name: 'user_register'}">
            <button type="button" class="btn btn-lg btn-primary-outline">注册</button>
          </router-link>
        </div>
      </div>
      <div class="title" v-else>
        <div class="title-info">
          A Blog with Markdown
          Welcome! {{ username }}
        </div>
        <label for="avatar">
          <input @change="update_avatar" accept="image/png, image/jpeg, image/jpg" type="file" id="avatar" name="avatar" style="display: none;">
          <img :src="avatar_url" alt="" class="profile_avatar">
        </label>
        <div class="my-button">
          <router-link :to="{name: 'index'}">
            <button type="button" class="btn btn-lg btn-primary-outline center" @click="logout">登出</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
export default {
  setup() {
    let store = useStore();
    let username = ref(store.state.user.username);
    let avatar_url = ref(store.state.user.avatar);
    let photo = ref(new Map());
    let formData = new FormData();

    console.log(store.state.user.is_login);

    const logout = () => {
      store.dispatch("logout");
    }

    const update_avatar = e => {
      photo.value.clear();
      for (let avatar of e.target.files) {
        formData.append("avatar", avatar);
        let reader = new FileReader();
        reader.readAsDataURL(avatar);

        reader.onload = () => {
          let url = URL.createObjectURL(avatar);
          photo.value.set(avatar.name, url);
        }
      }

      store.dispatch("updateAvatar", {
        formData: formData,
        success(resp) {
          avatar_url.value = resp
          console.log('更新头像成功！')
        },
        error() {
          console.log('更新失败！')
        }
      })
    }

    return {
      logout,
      username,
      avatar_url,
      update_avatar,
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
    justify-content: center;
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

  .profile_avatar {
    height: 20vh;
    border-radius: 50%;
    transform: translate(-10%, -6%);
  }
</style>