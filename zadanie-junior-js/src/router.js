import { createRouter, createWebHistory } from 'vue-router';
import NotFound from './view/NotFound.vue';
import HomeView from './view/HomeView.vue';

const routes = [
  {
    path: `/`,
    name: 'Home',
    component: HomeView,
  },
  // Wildcard route for 404 page
  {
    path: '/:pathMatch(.*)*',
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
