<template>
  <Form :initialData="initialData" @updateData="updateData" />
</template>

<script>
import Form from '@/components/Form.vue'
import { supabase } from '@/supabase';

export default {
  name: 'EditForm',
  data() {
    return {
      initialData: null,
      name: '',
      email: '',
      message: ''
    };
  },
  created() {
    const exampleId = 'exampleId';

    // データの取得
    supabase
      .from('your_table_name')
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
      const exampleId = 'exampleId';

      const updatedData = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      // データの更新
      supabase
        .from('your_table_name')
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
