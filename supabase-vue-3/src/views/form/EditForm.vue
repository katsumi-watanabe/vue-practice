<template>
  <div>
    <h1>編集フォーム</h1>
    <div v-if="initialData">
      <Form
        :initialData="initialData"
        v-model="formData"
        @submit="updateData"
      />
    </div>
    <div v-else>
      <p>データを取得中...</p>
    </div>
  </div>
</template>

<script>
import Form from '@/components/Form.vue'
import { supabase } from '@/supabase';

export default {
  name: 'EditForm',
  components: {
    Form
  },
  data() {
    return {
      initialData: null,
      formData: {
        id: '',
        name: '',
        email: '',
        message: ''
      }
    };
  },
  mounted() {
    // データの取得と代入
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const { data, error } = await supabase
        .from('supabase_practices')
        .select('*')
        .eq('id', this.$route.params.id)
        .single();

      if (error) {
        console.error(error);
        return;
      }

      // 取得したデータをコンポーネントのデータに代入
      this.initialData = data; // 修正: initialDataにデータを代入する
      this.formData.id = data.id;
      this.formData.name = data.name;
      this.formData.email = data.email;
      this.formData.message = data.message;
    },
    updateData() {
      const { id, name, email, message } = this.formData;

      const updatedData = {
        name,
        email,
        message
      };

      // データの更新
      supabase
        .from('supabase_practices')
        .update(updatedData)
        .eq('id', id)
        .then(({ data, error }) => {
          if (error) {
            console.log(error);
          } else {
            console.log('データが更新されました');
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
}
</script>
