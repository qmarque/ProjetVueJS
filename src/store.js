import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    transactions: [],
  },
  mutations: {
    loadTransactions(state, payload) { state.transactions = payload; },
  },
  actions: {
    loadTrans(context) {
      axios.get('https://api.punkapi.com/v2/beers').then((response) => {
        const reversed = response.data;
        context.commit('loadTransactions', reversed);
      });
    },
  },
  getters: {
    trans: (state) => state.transactions,
  },
});
