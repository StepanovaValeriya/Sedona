import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import Index from './views/Index.vue';
import Catalog from './views/Catalog.vue';
import './styles/main.scss';
import 'materialize-css/dist/js/materialize.min.js';

const routes = [
  { path: '/', component: Index },
  { path: '/catalog', component: Catalog },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App).use(router).mount('#app');
