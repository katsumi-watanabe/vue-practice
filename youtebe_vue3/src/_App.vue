<script setup>
import { ref, computed } from 'vue';
// vueからcomputedをインポート

// const answer = computed(() => {
//   return 123 + 112
// })

const message = computed(() =>  {
  return 'Hello <strong>' + myname.value + ' </strong> 3'
})
const welcomeColor = ref('blue')
const myname = ref('')
</script>

<template>
  <h1>Vue 3</h1>
  <p>お名前は？:  <input type="text" size="30" v-model="myname"></p>
  <p v-html="message" :style="{ backgroundColor: welcomeColor, color: 'white' }"></p>
  <!-- <p v-html="myname" :style="{ backgroundColor: welcomeColor, color: 'white' }"></p> -->
</template>