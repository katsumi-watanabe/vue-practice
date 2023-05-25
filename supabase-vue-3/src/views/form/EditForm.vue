<template>
  <Form
    :initialData="initialData"
    v-model="formData"
    @submit="updateData"
  />
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
      name: '',
      email: '',
      message: ''
    };
  },
  created() {
    const exampleId = 38;

    // データの取得
    supabase
      .from('supabase_practices')
      .select()
      .eq('id', exampleId)
      .single()
      .then(({ data, error }) => {
        if (error) {
          console.log(error);
        } else {
          this.initialData = data;
          this.name = data.name;
          this.email = data.email;
          this.message = data.message;
        }
      })
      .catch(error => {
        console.log(error);
      });
  },
  methods: {
    updateData() {
      const exampleId = 38;

      const updatedData = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      // データの更新
      supabase
        .from('supabase_practices')
        .update(updatedData)
        .eq('id', exampleId)
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
};
</script>