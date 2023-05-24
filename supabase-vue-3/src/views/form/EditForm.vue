<template>
  <Form />
</template>

<script>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { supabase } from '@/supabase'

  import Form from '@/components/Form.vue'
  export default {
  name: 'EditForm',
  components: {
    Form
  },
  setup() {
    const route = useRoute()
    const router = useRouter()
    const itemId = ref(route.params.id)
    const formData = ref(null)

    // データを取得してフォームに表示
    supabase
      .from('items')
      .select('*')
      .eq('id', itemId.value)
      .then(response => {
        formData.value = response.data[0]
      })

    // データを保存
    const saveData = () => {
      supabase
        .from('items')
        .update(formData.value)
        .eq('id', itemId.value)
        .then(() => {
          // 保存後に一覧ページにリダイレクト
          router.push('/list')
        })
    }

    return {
      formData,
      saveData
    }
  }
}
</script>