import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { defineRule, configure } from 'vee-validate'
import { Field, Form, ErrorMessage } from 'vee-validate'
import rules from '@vee-validate/rules'

const app = createApp(App)

Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule])
})

app.component('Form', Form)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

configure({
  validateOnInput: true,
})

app.mount('#app')
