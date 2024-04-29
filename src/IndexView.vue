<template>
  <NavBar/>
  <MdEditor/>
</template>

<script>

import {defineComponent} from "vue";
import NavBar from "@/components/NavBar.vue";
import MdEditor from "@/components/MdEditor.vue"
export default defineComponent({
  components: {
    NavBar,
    MdEditor
  }
})
</script>

<style scoped>

</style>