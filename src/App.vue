<template>
  <div id="app">
    <h1>Projet VUE JS</h1>
    <router-link to="/">
      <h1>Ma liste des bières</h1>
    </router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
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

a {
  text-decoration: none;
  color: gray;
}
</style>
