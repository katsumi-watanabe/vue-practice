<script>
import { ref } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import Home from './views/Home.vue'
import About from './views/About.vue'
import Form from './views/Form.vue'
import NotFound from './views/NotFound.vue'
import Index from './views/Index.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/index', component: Index },
  { path: '/form', component: Form },
  { path: '/:path(.*)', component: NotFound }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default {
  setup() {
    router.replace(window.location.hash.slice(1))
    window.addEventListener('hashchange', () => {
      router.replace(window.location.hash.slice(1))
    })
    return {
      currentView: ref('')
    }
  },
  router
}
</script>

<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/index">Lists</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/form">Form</router-link> |
  <router-link to="/non-existent-path">Broken Link</router-link>
  <router-view />
</template>