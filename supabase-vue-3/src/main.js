import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import Form from '../src/views/Form.vue';
import Index from '../src/views/Index.vue';
import About from '../src/views/About.vue';
import NotFound from '../src/views/NotFound.vue';
import Home from '../src/views/Home.vue';

import { defineRule, configure } from 'vee-validate'
import { Field, Form as VeeForm, ErrorMessage } from 'vee-validate'
import rules from '@vee-validate/rules'

const app = createApp(App)

Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule])
})

app.component('Form', VeeForm)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

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

app.use(router)

configure({
  validateOnInput: true,
})

app.mount('#app');
