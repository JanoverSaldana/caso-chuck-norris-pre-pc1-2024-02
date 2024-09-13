<script>
import JokesContent from "./chuckNorris/components/jokes-content.component.vue";
import ToolbarContent from "./public/components/toolbar-content.component.vue";
import FooterContent from "./public/components/footer-content.component.vue";

export default {
  name: 'App',
  components: { FooterContent, ToolbarContent, JokesContent},
  created() {
    console.log("App created");
  }
}

</script>

<template>

  <toolbar-content></toolbar-content>

  <jokes-content></jokes-content>

  <footer-content></footer-content>


</template>

<style scoped>

</style>
