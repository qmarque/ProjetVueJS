<template>
  <div class="dataBeer">
    <DataBeer msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import DataBeer from '@/components/DataBeer.vue';

export default {
  name: 'DataBeerView',
  components: {
    DataBeer,
  },
};
</script>
