<script setup>
defineProps(['todos'])
const emit = defineEmits(['removeTodo'])
// 親コンポーネントからemitされたremoveTodoを受け取る
const clickRemove = (i) => emit('removeTodo', i)
</script>

<template>
<ul v-if="todos.length > 0">
  <li v-for="(todo, i) in todos" v-bind:key="i">{{ todo }}
    <span @click="clickRemove(i)" style="cursor: pointer;">×</span>
  </li>
</ul>
<p v-else>※ Todoを追加してください</p>
</template>