<script>

import {JokeService} from "../services/joke-service.js";
import {Category} from "../model/category.entity.js";



export default {
  name: 'JokesContent',


  data() {
    return {
      jokes: [],
      categories: [],
      jokeApiService: new JokeService(),

    }
  },

  methods: {

    buildResourcesListFromResponseData(resource) {
      return resource.map(response => new Category(response));
    },

    getAllJokesCategories() {
      this.jokeApiService.getAllCategories()
          .then(response => {

            this.categories = this.buildResourcesListFromResponseData(response.data);

            console.log("All Categories: ", this.categories);

            this.categories.forEach(variable => {
              this.getJokesByCategory(variable.name);
            });

          })
          .catch(error => {
            console.error("Error al cargar los datos Categories",error);
          });
    },


    getJokesByCategory(category) {
      this.jokeApiService.getJokeByCategory(category)
          .then(response => {
            this.jokes.push(response.data);
          })
          .catch(error => {
            console.error("Error al cargar los datos Jokes",error);
          });
    }

  },



  created() {
    this.getAllJokesCategories();
  }



}

</script>

<template>

  <div>
    <h1>Chuck Norris Jokes</h1>
  </div>
  <!--Organizar el contenido en una card-->
  <pv-card v-for="joke in jokes" :key="joke.id" style="width: 25rem; overflow: hidden; border: solid 4px; margin-bottom: 20px">

    <template #header>
      <img :src="joke.icon_url" alt="Joke Icon" />
    </template>

    <template #content>
      <p>{{joke.value}}</p>
    </template>

  </pv-card>






</template>

<style scoped>

</style>