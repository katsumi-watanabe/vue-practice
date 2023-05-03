<script setup>
import { ref, computed } from 'vue'
import { supabase } from './supabase';
import Home from './App.vue'
import About from './views/About.vue'
// import NotFound from './NotFound.vue'

const routes = {
  '/': Home,
  '/about': About
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '/'] || NotFound
})

const tasks = ref([]);
const getTasks = async () => {
  let { data: supabase_practices, error } = await supabase
  .from('supabase_practices')
  .select('*')

  tasks.value = supabase_practices;
};

getTasks();
</script>

<template>
  <div>
    <h1>Vue3でsupabase</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.text }}</li>
    </ul>
    <a href="/">Home</a> |
    <a href="/about">About</a> |
    <component :is="currentView" />
  </div>
</template>