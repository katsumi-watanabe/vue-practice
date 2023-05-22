import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'
import router from '@/router'

import { defineRule, configure } from 'vee-validate'
import { Field, Form as VeeForm, ErrorMessage } from 'vee-validate'
import rules from '@vee-validate/rules'

const app = createApp(App)

const appRouter = createRouter({
  history: createWebHistory(),
  routes: router
})


Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule])
})

app.component('Form', VeeForm)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)


configure({
  validateOnInput: true,
})

app.use(appRouter)
app.mount('#app')
