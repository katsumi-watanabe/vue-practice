import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import About from '@/views/about/About.vue'
import Form from '@/views/form/Form.vue'
import List from '@/views/list/Index.vue'
import Edit from '@/views/list/Edit.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/form', component: Form },
  { path: '/list', component: List },
  { path: '/edit/:id', component: Edit },
  { path: '/:pathMatch(.*)*', component: NotFound }
]

export default routes
