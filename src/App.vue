<template>
  <div id="app">
    <h1>Projet VUE JS</h1>
    <BeerList msg="Ma liste de bières"/>
  </div>
</template>

<script>
import BeerList from './components/BeerList.vue';

export default {
  name: 'App',
  components: {
    BeerList,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}

</style>
