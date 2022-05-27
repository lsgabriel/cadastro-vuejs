import { createRouter, createWebHashHistory } from 'vue-router'

import Cadastro from '../views/Cadastro.vue';
import Detalhes from '../views/Detalhes.vue';
import Revisao from '../views/Revisao.vue';
import Conclusao from '../views/Conclusao.vue';

const routes = [
  {
    path: '/',
    name: 'cadastro',
    component: Cadastro,
  },
  {
    path: '/detalhes',
    name: 'detalhes',
    component: Detalhes,
  },
  {
    path: '/revisao',
    name: 'revisao',
    component: Revisao,
  },
  {
    path: '/conclusao',
    name: 'conclusao',
    component: Conclusao,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
