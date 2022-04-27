import Vue from 'vue';
import VueRouter from 'vue-router';
import DataBeerView from '../views/DataBeerView.vue';
import TransactionsPaginatedView from '../views/TransactionsPaginatedView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'transactions-paginated',
    component: TransactionsPaginatedView,
  },
  {
    path: '/beer/:id',
    name: 'beer',
    component: DataBeerView,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
