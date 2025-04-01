import { createRouter, createWebHistory } from 'vue-router';
import NotFoundView from './views/NotFoundView.vue';
import HomeView from './views/HomeView.vue';
import MathView from './views/MathView.vue';
import IpAddressView from './views/IpAddressView.vue';

const routes = [
  {
    path: `/`,
    name: 'Home',
    component: HomeView,
  },
  {
    path: `/xy`,
    name: 'Math',
    component: MathView,
  },
  {
    path: `/ip`,
    name: 'IpAddress',
    component: IpAddressView,
  },
  // Wildcard route for 404 page
  {
    path: '/:pathMatch(.*)*',
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
