import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    beers: [],
  },
  mutations: {
    loadBeers(state, payload) { state.beers = payload; },
  },
  actions: {
    loadTrans(context) {
      axios.get('https://api.punkapi.com/v2/beers').then((response) => {
        const reversed = response.data;
        context.commit('loadBeers', reversed);
      });
    },
  },
  getters: {
    trans: (state) => state.beers,
  },
});
