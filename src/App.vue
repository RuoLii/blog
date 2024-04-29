<template>
  <NavBar/>
  <MdEditor/>
</template>

<script>
import "bootstrap/dist/js/bootstrap.min.js"
import "bootstrap/dist/css/bootstrap.min.css"
import NavBar from "@/components/NavBar.vue";
import MdEditor from "@/components/MdEditor.vue"

export default {
  name: 'App',
  components: {
    MdEditor,
    NavBar,
  }
}
</script>

<style lang="scss">

</style>