<template>
  <NavBar/>
  <div v-if="!store.state.user.is_login">
    <MdEditor class="blur-effect"  :toolbars="[]" :disabled="true"/>
    <p class="text-overlay">登录后才能使用编辑器</p>
  </div>
  <div v-else>
    <MdEditor/>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import {defineComponent} from "vue";
import NavBar from "@/components/NavBar.vue";
import MdEditor from "@/components/MdEditor.vue"
import router from "@/router";
export default defineComponent({
  components: {
    NavBar,
    MdEditor
  },
  setup() {
    let store = useStore();
    //  持久登录
    let jwt_token = localStorage.getItem("jwt_token");
    if (jwt_token) {
      store.commit("updateToken", jwt_token);
      store.dispatch("getMember", {
        success() {
          router.push({name: "index"});
        },
        error() {
          console.log("error occurred");
        }
      })
    }
    return {
      store,
    }
  }
})
</script>

<style scoped>
.blur-effect {
  filter: blur(3px);
}
.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  color: grey;
  font-size: 50px;
  font-weight: bolder;
  transform: translate(-50%, -50%);
}
</style>