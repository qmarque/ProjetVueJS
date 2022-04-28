import Vue from 'vue';
import VueRouter from 'vue-router';
import DataBeerView from '../views/DataBeerView.vue';
import ListBeersView from '../views/ListBeersView.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'beer-list',
    component: ListBeersView,
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
