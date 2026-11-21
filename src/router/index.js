
import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import QuartosView from '../views/QuartosView.vue'
import ReservasView from '../views/ReservasView.vue'
import SobreView from '../views/SobreView.vue'
import NotFoundView from '../views/NotFoundView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/quartos', component: QuartosView },
  { path: '/reservas', component: ReservasView },
  { path: '/sobre', component: SobreView },
  { path: '/:pathMatch(.*)*', component: NotFoundView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
