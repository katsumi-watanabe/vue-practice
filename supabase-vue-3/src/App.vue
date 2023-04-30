<script type="module">
import { onMounted, ref } from 'vue'
import Account from './components/Account.vue'
import Auth from './components/Auth.vue'
import { createClient } from '@supabase/supabase-js'

const session = ref()
const supabase = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY)

onMounted(() => {
  supabase.auth.getSession().then(({ user }) => {
    session.value = user
  })

  supabase.auth.onAuthStateChange((_event, _session) => {
    session.value = _session?.user
  })
})

export default {
  components: {
    Account,
    Auth
  },
  setup() {
    return { session }
  }
}
</script>

<template>
  <div class="container" style="padding: 50px 0 100px 0">
    <Account v-if="session" :session="session.value" />
    <Auth v-else />
  </div>
</template>
