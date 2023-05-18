<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '../supabase';

const practices = ref([]);

onMounted(async () => {
  // ここにデータ取得処理を書く
  const { data, error } = await supabase.from('supabase_practices').select('*')
  if (error) {
    console.error(error)
  } else {
    practices.value = data
  }
})
</script>

<template>
<h1>一覧画面</h1>
<section class="text-gray-600 body-font">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Banh mi cornhole echo park skateboard authentic crucifix neutra tilde lyft biodiesel artisan direct trade mumblecore 3 wolf moon twee</p>
    </div>
    <div class="lg:w-2/3 w-full mx-auto overflow-auto">
      <table class="table-auto w-full text-left whitespace-no-wrap">
        <thead>
          <tr>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100 rounded-tl rounded-bl">id</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">name</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">email</th>
            <th class="px-4 py-3 title-font tracking-wider font-medium text-gray-900 text-sm bg-gray-100">message</th>
          </tr>
        </thead>
        <tbody>
        <tr v-for="practice in practices" :key="practice.id">
          <td class="border-t-2 border-gray-200 px-4 py-3">{{ practice.id }}</td>
          <td class="border-t-2 border-gray-200 px-4 py-3">{{ practice.name }}</td>
          <td class="border-t-2 border-gray-200 px-4 py-3">{{ practice.email }}</td>
          <td class="border-t-2 border-gray-200 px-4 py-3 text-lg text-gray-900">{{ practice.message }}</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div class="flex pl-4 mt-4 lg:w-2/3 w-full mx-auto">
      <router-link :to="'/form'" class="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
        Form画面へ移動
        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-2" viewBox="0 0 24 24">
          <path d="M5 12h14M12 5l7 7-7 7"></path>
        </svg>
      </router-link>
      <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Button</button>
    </div>
  </div>
</section>
</template>