<script>
import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import { defineRule, configure } from 'vee-validate'
import { Field, Form as VeeForm, ErrorMessage } from 'vee-validate'
import rules from '@vee-validate/rules'
import router from '@/router'

// Appコンポーネントをインポートする前にVueアプリケーションを作成
const app = createApp({})

// ルールの定義
Object.keys(rules).forEach((rule) => {
  defineRule(rule, rules[rule])
})

// コンポーネントの登録
app.component('Form', VeeForm)
app.component('Field', Field)
app.component('ErrorMessage', ErrorMessage)

// vee-validateの設定
configure({
  validateOnInput: true,
})

// アプリケーションにルーターを使用
app.use(router)

// Appコンポーネントをインポート
import App from './App.vue'

</script>

<template>
  <router-link to="/">Home</router-link> |
  <router-link to="/list">Lists</router-link> |
  <router-link to="/about">About</router-link> |
  <router-link to="/form">Form</router-link> |
  <router-link to="/non-existent-path">Broken Link</router-link>
  <router-view />
</template>
