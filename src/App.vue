<template>
  <div id="app">
    <h1>Projet VUE JS</h1>
    <!-- <BeerList msg="Ma liste de bières"/> -->
    <TransactionsPaginated msg="Ma liste de bières"/>
        <transactions-paginated
:data="trans"
:total-pages="Math.ceil(trans.length / 8)"
:total="trans.length"
:per-page="8"
:current-page="currentPage"
@pagechanged="onPageChange"
/>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
// import BeerList from './components/BeerList.vue';
import TransactionsPaginated from './components/TransactionsPaginated.vue';

export default {
  name: 'App',
  mounted() {
    this.loadTrans();
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    ...mapActions(['loadTrans']),
    onPageChange(page) {
      this.currentPage = page;
    },
  },
  computed: {
    ...mapGetters(['trans']),
  },
  components: {
    // BeerList,
    TransactionsPaginated,
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

.pagination {
      display: flex;
      justify-content: center;
      padding: 0;
      margin: auto 0 0 0;
      list-style-type: none;
}

        button {
          margin: 0!important;
          padding: .25rem .5rem;
          font-size: 1.1rem;
          border: none;
          border-radius: .25rem;
          background: none;
        }
          /* button:hover {
            cursor: pointer;
            background-color: silver
          } */

          button[disabled="disabled"] {
            color: silver;
            cursor: default;
          }
          button:hover{
              cursor: default;
              background-color: transparent;
              color: black;
          }
          button.active {
            color: red;
        }

</style>
