<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from './supabase';

const introductions = ref([]);

const getUsers = async () => {
  let { data: users, error, status } = await supabase.from('users').select('*');

  introductions.value = users;
};

getUsers();
</script>

<template>
  <div>
    <h1>Vue3でsupabase</h1>
    <ul>
      <li v-for="introduction in introductions" :key="introduction.id">{{ introduction.email }}</li>
    </ul>
  </div>
</template>