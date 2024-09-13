<script>



export default {
  name: "toolbar-content",

  data() {
    return {
      languages: ['en', 'es'],
      language: 'en'
    }
  }

}
</script>

<template class="back">

  <div class="toolbar-container" >
    <pv-toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem" >
      <template #start>
        <div class="flex items-center gap-2">
          <h2> Caso: Chuck Norris Jokes</h2>
        </div>
      </template>
      <template #end>
        <pv-select-button v-model="$i18n.locale" :options="languages"/>
      </template>
    </pv-toolbar>
  </div>

</template>


<style scoped>


</style>