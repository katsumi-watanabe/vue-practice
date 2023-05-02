<script setup>
import { ref } from 'vue';
import { supabase } from './supabase';

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
    <h1>Vue3でsupabase_about-page</h1>
    <ul>
      <li v-for="task in tasks" :key="task.id">{{ task.text }}</li>
    </ul>
    <a href="#/">Home</a> |
  <a href="/about">About</a> |
  <a href="/non-existent-path">Broken Link</a>
  </div>
</template>